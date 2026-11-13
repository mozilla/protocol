/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// Runs in the <head> of each component preview so the brand applies before
// first paint. A ?brand= query param wins over the choice saved by brand.js.
const brands = ['mozilla', 'firefox'];
const param = new URLSearchParams(window.location.search).get('brand');
let brand = brands.includes(param) ? param : null;

if (!brand) {
    try {
        brand = window.localStorage.getItem('protocol-brand');
    } catch {
        brand = null;
    }
}

if (brands.includes(brand)) {
    document.documentElement.setAttribute('data-brand', brand);
}
