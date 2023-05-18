/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const MzpFooter = {};

MzpFooter.init = () => {
    const footerHeadings = '.mzp-c-footer-sections .mzp-c-footer-heading';

    // removes Details component if screen size is big
    function screenChange(mq) {
        if (mq.matches) {
            window.MzpDetails.init(footerHeadings);
        } else {
            window.MzpDetails.destroy(footerHeadings);
        }
    }

    // check we have global Supports and Details library
    if (typeof window.MzpSupports !== 'undefined' && typeof window.MzpDetails !== 'undefined') {

        // check browser supports matchMedia
        if (window.MzpSupports.matchMedia) {
            const _mqWide = matchMedia('(max-width: 479px)');

            // initialize details if screen is small
            if (_mqWide.matches) {
                window.MzpDetails.init(footerHeadings);
            }

            if (window.matchMedia('all').addEventListener) {
                _mqWide.addEventListener('change', screenChange, false);
            } else if (window.matchMedia('all').addListener) {
                _mqWide.addListener(screenChange);
            }
        }
    }

};

module.exports = MzpFooter;
