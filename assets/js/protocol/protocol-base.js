/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

(function() {
    'use strict';

    /**
     * This script is used to determine that JS is enabled in the browser,
     * and provides `.js` and `.no-js` styling hooks used in component CSS.
     * In order to avoid content flashing and repaints on page load, it is
     * recommended that this script should be run in the <head>, before
     * page CSS is parsed.
     */

    var doc = document.documentElement;

    // Add class to reflect javascript availability for CSS
    doc.className = doc.className.replace(/\bno-js\b/, 'js');

})();
