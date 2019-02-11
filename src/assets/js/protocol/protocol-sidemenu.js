/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

(function() {
    'use strict';

    var menu = document.querySelector('.mzp-c-sidemenu');
    var menuMain = document.querySelector('.mzp-c-sidemenu-main');
    var menuToggle = document.querySelector('.mzp-js-toggle');

    // Make the menu more accessible
    menuToggle.setAttribute('tabindex', '0');
    menuToggle.setAttribute('role', 'button');
    menuMain.setAttribute('aria-expanded', 'false');

    // Toggle the sidebar menu
    menuToggle.addEventListener('click', function(e) {
        e.preventDefault();
        menu.classList.toggle('mzp-is-active');

        var menuExpanded = menuMain.getAttribute('aria-expanded') === 'true' ? 'false' : 'true';
        menuMain.setAttribute('aria-expanded', menuExpanded);
    }, false);

})();
