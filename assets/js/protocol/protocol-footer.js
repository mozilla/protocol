/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

(function() {
    'use strict';

    // removes Details component if screen size is big
    function screenChange(mq) {
        if (mq.matches) {
            Mzp.Details.init(footerHeadings);
        } else {
            Mzp.Details.destroy(footerHeadings);
        }
    }

    // check we have global variable
    if (typeof window.Mzp !== 'undefined') {
        var Mzp = window.Mzp;
        var footerHeadings = '.mzp-c-footer-sections .mzp-c-footer-heading';

        // check we have global Supports and Details library
        if (typeof Mzp.Supports !== 'undefined' && typeof Mzp.Details !== 'undefined') {

            // check browser supports matchMedia
            if (Mzp.Supports.matchMedia) {
                var _mqWide = matchMedia('(max-width: 479px)');

                // initialize details if screen is small
                if (_mqWide.matches) {
                    Mzp.Details.init(footerHeadings);
                }

                if (window.matchMedia('all').addEventListener) {
                    _mqWide.addEventListener('change', screenChange, false);
                } else if (window.matchMedia('all').addListener) {
                    _mqWide.addListener(screenChange);
                }
            }
        }
    }
})();
