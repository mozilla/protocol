/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// create namespace
if (typeof Mzp === 'undefined') { // eslint-disable-line block-scoped-var
    var Mzp = {};
}

(function() {
    'use strict';

    var LangSwitcher = {};

    /**
     * Returns URL pathname with preceded by a new page locale.
     * Assumes first path immediately after hostname is the page locale.
     * @param {Object} Location interface
     * @param {String} Newly selected language code e.g. `de`
     * @return {String} pathname e.g. `/de/firefox/`
     */
    LangSwitcher.switchPath = function(location, newLang) {
        var parts = location.pathname.slice(1).split('/');
        var currentLang = '/' + parts[0] + '/';

        // check that first path is a valid lang code.
        if (!/^(\/\w{2}-\w{2}\/|\/\w{2,3}\/)/.test(currentLang)) {
            return false;
        }

        var urlpath = parts.slice(1).join('/');
        return '/' + newLang + '/' + urlpath + location.search;
    };

    /**
     * Redirect page to destination URL if valid
     * @param {String} destination
     */
    LangSwitcher.doRedirect = function(destination) {
        if (destination) {
            window.location.href = destination;
        }
    };

    /**
     * Initialize footer lang switcher.
     * @param {function} Custom callback for analytics.
     */
    LangSwitcher.init = function(callback) {
        var language = document.querySelectorAll('.mzp-js-language-switcher-select');

        for (var i = 0; i < language.length; i++) {
            language[i].setAttribute('data-previous-language', language[i].value);

            language[i].addEventListener('change', function(e) {
                var newLanguage = e.target.value;
                var previousLanguage = e.target.getAttribute('data-previous-language');

                // support custom callback for page analytics.
                if (typeof callback === 'function') {
                    callback(previousLanguage, newLanguage);
                }

                LangSwitcher.doRedirect(LangSwitcher.switchPath(window.location, newLanguage));
            }, false);
        }

    };

    window.Mzp.LangSwitcher = LangSwitcher;

})();
