/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// create namespace
if (typeof window.Mzp === 'undefined') { // eslint-disable-line block-scoped-var
    window.Mzp = {};
}

(function() {
    'use strict';

    var StickyPromo = {};
    var stickyPromo;
    var closeButton;

    stickyPromo = document.querySelector('.mzp-c-sticky-promo');

    /*
    element: This component inits if it can find an instance of `.mzp-c-sticky-promo` in the DOM.
    */
    StickyPromo.init = function(element) {
        if (!element) {
            return false;
        }

        // Set close button/actions
        closeButton = document.querySelector('.mzp-c-sticky-promo-close');
        closeButton.addEventListener('click', StickyPromo.close, false);

        // Backward compatibility to auto-show the promo if the class `mzp-js-show-on-load` is present.
        if (element.classList.contains('mzp-js-show-on-load')) {
            document.addEventListener('DOMContentLoaded', function(){
                StickyPromo.open();
            });
        }
    };

    StickyPromo.close = function(e) {
        if (e) {
            e.preventDefault();
        }

        e.currentTarget.parentNode.classList.remove('mzp-a-slide-in', 'mzp-js-show-on-load');
        e.currentTarget.parentNode.classList.add('mzp-a-fade-out');
    };

    StickyPromo.open = function(e) {
        if (e) {
            e.preventDefault();
        }
        stickyPromo.classList.add('mzp-a-slide-in');
        stickyPromo.classList.remove('mzp-a-fade-out');
    };

    StickyPromo.init(stickyPromo);

    window.Mzp.StickyPromo = StickyPromo;

})();
