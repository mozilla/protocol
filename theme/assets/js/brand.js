/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// Site-wide Mozilla/Firefox brand switch for component previews. Previews
// loaded later read the saved choice themselves (see brand-preview.js).
// A ?brand= query param on any docs page switches and saves the brand, so
// links can be shared.
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

function setBrand(brand) {
    try {
        window.localStorage.setItem(storageKey, brand);
    } catch {
        // Storage can be unavailable (e.g. blocked); still re-theme the open previews.
    }
    document.querySelectorAll('.Preview-iframe').forEach((iframe) => {
        const preview = iframe.contentDocument;
        if (preview) {
            preview.documentElement.setAttribute('data-brand', brand);
        }
    });
}

if (controls) {
    const param = new URLSearchParams(window.location.search).get('brand');
    let brand = getSavedBrand();

    if (brands.includes(param)) {
        brand = param;
        setBrand(brand);
    }

    controls.querySelector(`input[value="${brand}"]`).checked = true;

    controls.addEventListener('change', (e) => {
        setBrand(e.target.value);
    });
}
