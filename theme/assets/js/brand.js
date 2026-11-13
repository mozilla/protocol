/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// Site-wide Mozilla/Firefox brand switch for component previews. Previews
// loaded later read the saved choice themselves (see brand-preview.js).
const storageKey = 'protocol-brand';
const controls = document.querySelector('.Header-brand-controls');

function getBrand() {
    try {
        return window.localStorage.getItem(storageKey) || 'mozilla';
    } catch {
        return 'mozilla';
    }
}

function applyToPreviews(brand) {
    document.querySelectorAll('.Preview-iframe').forEach((iframe) => {
        const preview = iframe.contentDocument;
        if (preview) {
            preview.documentElement.setAttribute('data-brand', brand);
        }
    });
}

if (controls) {
    const current = controls.querySelector(`input[value="${getBrand()}"]`);
    if (current) {
        current.checked = true;
    }

    controls.addEventListener('change', (e) => {
        const brand = e.target.value;
        try {
            window.localStorage.setItem(storageKey, brand);
        } catch {
            // Storage can be unavailable (e.g. blocked); still re-theme the open previews.
        }
        applyToPreviews(brand);
    });
}
