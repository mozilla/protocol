/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

(function() {
    'use strict';

    var closeButton = document.querySelector('.mzp-c-sticky-promo-close');

    closeButton.addEventListener('click', function(e) {
        e.preventDefault();
        e.currentTarget.parentNode.classList.add('mzp-a-fade-out');
    }, false);

})();
