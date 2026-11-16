/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// Runs in the <head> of each component preview so the brand applies before
// first paint. Order: a ?brand= query param, then the docs page's current
// switch (data-preview-brand, set by brand.js), then the saved choice.
const brands = ['mozilla', 'firefox'];

function fromParent() {
    try {
        if (window.parent !== window) {
            return window.parent.document.documentElement.getAttribute('data-preview-brand');
        }
    } catch {
        // Cross-origin embed; fall through to the saved choice.
    }
    return null;
}

function fromStorage() {
    try {
        return window.localStorage.getItem('protocol-brand');
    } catch {
        return null;
    }
}

const brand = [new URLSearchParams(window.location.search).get('brand'), fromParent(), fromStorage()]
    .find((value) => brands.includes(value));

if (brand) {
    document.documentElement.setAttribute('data-brand', brand);
}
