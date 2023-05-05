/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const MzpStickyPromo = {};

let element;
let closeButton;

/*
element: This component inits if it can find an instance of `.mzp-c-sticky-promo` in the DOM.
*/
MzpStickyPromo.init = () => {
    element = document.querySelector('.mzp-c-sticky-promo');

    if (!element) {
        return false;
    }

    // Set close button/actions
    closeButton = document.querySelector('.mzp-c-sticky-promo-close');
    closeButton.addEventListener('click', MzpStickyPromo.close, false);

    // Backward compatibility to auto-show the promo if the class `mzp-js-show-on-load` is present.
    if (element.classList.contains('mzp-js-show-on-load')) {
        document.addEventListener('DOMContentLoaded', () => {
            MzpStickyPromo.open();
        });
    }
};

MzpStickyPromo.close = (e) => {
    if (e) {
        e.preventDefault();
    }

    e.currentTarget.parentNode.classList.remove('mzp-a-slide-in', 'mzp-js-show-on-load');
    e.currentTarget.parentNode.classList.add('mzp-a-fade-out');
};

MzpStickyPromo.open = (e) => {
    if (e) {
        e.preventDefault();
    }
    element.classList.add('mzp-a-slide-in');
    element.classList.remove('mzp-a-fade-out');
};

MzpStickyPromo.init();

module.exports = MzpStickyPromo;
