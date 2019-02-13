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
    var navItemsLists;
    var _options = {
        onNavOpen: null
    };

    /**
     * Event handler for navigation menu button `click` events.
     */
    Navigation.onClick = function(e) {
        var thisNavItemList  = e.target.parentNode.querySelector('.mzp-c-navigation-items');

        e.preventDefault();

        // Update button state
        e.target.classList.toggle('mzp-is-active');

        // Update menu state
        thisNavItemList.classList.toggle('mzp-is-open');

        // Update aria-expended state on menu.
        var expanded = thisNavItemList.classList.contains('mzp-is-open') ? true : false;
        thisNavItemList.setAttribute('aria-expanded', expanded);

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
        for (var i = 0; i < navItemsLists.length; i++) {
            navItemsLists[i].setAttribute('aria-expanded', false);
        }
    };

    /**
     * Bind navigation event handlers.
     */
    Navigation.bindEvents = function() {
        navItemsLists = document.querySelectorAll('.mzp-c-navigation-items');
        if (navItemsLists.length > 0) {
            var navButtons = document.querySelectorAll('.mzp-c-navigation-menu-button');
            for (var i = 0; i < navButtons.length; i++) {
                navButtons[i].addEventListener('click', Navigation.onClick, false);
            }
        }
        Navigation.setAria();
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
