/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// Site-wide Mozilla/Firefox brand switch for component previews. The active
// brand is kept on this page's <html> as data-preview-brand, which previews
// read before first paint (see brand-preview.js), so they stay in sync even
// when localStorage is unavailable. A ?brand= query param on any docs page
// switches and saves the brand, so links can be shared.
const storageKey = 'protocol-brand';
const brands = ['mozilla', 'firefox'];
const controls = document.querySelector('.Header-brand-controls');

function getSavedBrand() {
    try {
        const saved = window.localStorage.getItem(storageKey);
        return brands.includes(saved) ? saved : 'mozilla';
    } catch {
        return 'mozilla';
    }
}

function saveBrand(brand) {
    try {
        window.localStorage.setItem(storageKey, brand);
    } catch {
        // Storage can be unavailable (e.g. blocked); data-preview-brand still covers this page.
    }
}

function applyBrand(brand) {
    document.documentElement.setAttribute('data-preview-brand', brand);
    document.querySelectorAll('.Preview-iframe').forEach((iframe) => {
        // An iframe that hasn't started loading has no documentElement yet;
        // it reads data-preview-brand when it does load.
        const root = iframe.contentDocument && iframe.contentDocument.documentElement;
        if (root) {
            root.setAttribute('data-brand', brand);
        }
    });
}

// Keep a shared ?brand= link accurate after the switch changes. Passing
// history.state through preserves pjax's history entry.
function syncUrl(brand) {
    const url = new URL(window.location.href);
    if (url.searchParams.has('brand')) {
        url.searchParams.set('brand', brand);
        window.history.replaceState(window.history.state, '', url.href);
    }
}

function getUrlBrand() {
    const param = new URLSearchParams(window.location.search).get('brand');
    return brands.includes(param) ? param : null;
}

if (controls) {
    let current = getUrlBrand() || getSavedBrand();

    const setCurrent = (brand) => {
        current = brand;
        saveBrand(brand);
        applyBrand(brand);
        controls.querySelector(`input[value="${brand}"]`).checked = true;
    };

    // pjax and Back/Forward change the URL without rerunning this script, so
    // pick up a ?brand= in the new URL when they do.
    const syncFromUrl = () => {
        const brand = getUrlBrand();
        if (brand && brand !== current) {
            setCurrent(brand);
        }
    };

    if (getUrlBrand()) {
        saveBrand(current);
    }
    applyBrand(current);
    controls.querySelector(`input[value="${current}"]`).checked = true;

    controls.addEventListener('change', (e) => {
        setCurrent(e.target.value);
        syncUrl(current);
    });

    window.addEventListener('popstate', syncFromUrl);
    // jquery-pjax only fires jQuery events, which native listeners don't see.
    if (window.jQuery) {
        window.jQuery(document).on('pjax:end', syncFromUrl);
    }
}
