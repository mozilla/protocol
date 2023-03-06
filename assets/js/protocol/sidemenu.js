/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const MzpSideMenu = {};

MzpSideMenu.init = () => {
    const menu = document.querySelector('.mzp-c-sidemenu');
    const menuMain = document.querySelector('.mzp-c-sidemenu-main');
    const menuToggle = document.querySelector('.mzp-js-toggle');

    if (menu && menuMain && menuToggle) {

        // Make the menu more accessible
        menuToggle.setAttribute('tabindex', '0');
        menuToggle.setAttribute('role', 'button');
        menuMain.setAttribute('aria-expanded', 'false');

        // Toggle the sidebar menu
        menuToggle.addEventListener('click', (e) => {
            e.preventDefault();
            menu.classList.toggle('mzp-is-active');

            const menuExpanded = menuMain.getAttribute('aria-expanded') === 'true' ? 'false' : 'true';
            menuMain.setAttribute('aria-expanded', menuExpanded);
        }, false);
    }
};

module.exports = MzpSideMenu;
