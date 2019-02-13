/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// create namespace
if (typeof Mzp === 'undefined') { // eslint-disable-line block-scoped-var
    var Mzp = {};
}

(function() {
    'use strict';

    var Navigation = {};
    var navItems;
    var _options = {
        onNavOpen: null
    };

    /**
     * Event handler for navigation menu button `click` events.
     */
    Navigation.onClick = function(e) {
        e.preventDefault();

        // Update button state
        e.target.classList.toggle('is-active');

        // Update menu state
        navItems.classList.toggle('is-open');

        // Update aria-expended state on menu.
        var expanded = navItems.classList.contains('is-open') ? true : false;
        navItems.setAttribute('aria-expanded', expanded);

        if (expanded) {
            if (typeof _options.onNavOpen === 'function') {
                _options.onNavOpen();
            }
        } else {
            if (typeof _options.onNavClose === 'function') {
                _options.onNavClose();
            }
        }
    };

    /**
     * Set initial ARIA navigation states.
     */
    Navigation.setAria = function() {
        navItems.setAttribute('aria-expanded', false);
    };

    /**
     * Bind navigation event handlers.
     */
    Navigation.bindEvents = function() {
        navItems = document.querySelector('.mzp-c-navigation-items');
        if (navItems) {
            document.querySelector('.mzp-c-navigation-menu-button').addEventListener('click', Navigation.onClick, false);
            Navigation.setAria();
        }
    };

    /**
     * Initialise menu.
     * @param {Object} options - configurable options.
     */
    Navigation.init = function(options) {
        if (typeof options === 'object') {
            for (var i in options) {
                if (options.hasOwnProperty(i)) {
                    _options[i] = options[i];
                }
            }
        }

        Navigation.bindEvents();
    };

    window.Mzp.Navigation = Navigation;

})();
