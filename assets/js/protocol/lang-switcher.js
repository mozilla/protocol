/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const MzpLangSwitcher = {};

/**
 * Returns URL pathname preceded by a new page locale.
 * Assumes first path immediately after hostname is the page locale.
 * @param {Object} Location interface
 * @param {String} Newly selected language code e.g. `de`
 * @return {String} pathname e.g. `/de/firefox/`
 */
MzpLangSwitcher.switchPath = (location, newLang) => {
    const parts = location.pathname.slice(1).split('/');
    const currentLang = '/' + parts[0] + '/';

    // check that first path is a valid lang code.
    if (!/^(\/\w{2}-\w{2}\/|\/\w{2,3}\/)/.test(currentLang)) {
        return false;
    }

    const urlpath = parts.slice(1).join('/');
    return '/' + newLang + '/' + urlpath + location.search;
};

/**
 * Redirect page to destination URL if valid
 * @param {String} destination
 */
MzpLangSwitcher.doRedirect = (destination) => {
    if (destination) {
        window.location.href = destination;
    }
};

/**
 * Initialize footer lang switcher.
 * @param {function} Custom callback for analytics.
 */
MzpLangSwitcher.init = (callback) => {
    const language = document.querySelectorAll('.mzp-js-language-switcher-select');

    for (let i = 0; i < language.length; i++) {
        language[i].setAttribute('data-previous-language', language[i].value);

        language[i].addEventListener('change', function(e) {
            const newLanguage = e.target.value;
            const previousLanguage = e.target.getAttribute('data-previous-language');

            // support custom callback for page analytics.
            if (typeof callback === 'function') {
                callback(previousLanguage, newLanguage);
            }

            MzpLangSwitcher.doRedirect(MzpLangSwitcher.switchPath(window.location, newLanguage));
        }, false);
    }
};

module.exports = MzpLangSwitcher;
