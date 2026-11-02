/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const MzpSideMenu = {};

MzpSideMenu.init = () => {
    const menu = document.querySelector('.mzp-c-sidemenu');
    const menuMain = document.querySelector('.mzp-c-sidemenu-main');
    const menuToggle = document.querySelector('.mzp-js-toggle');

    if (menu && menuMain && menuToggle) {
        // `aria-expanded` belongs on the controlling element, which the template
        // already links to the content with `aria-controls`, not on the content
        // itself. Declaring it on `.mzp-c-sidemenu-main` announced visible content
        // as collapsed, including on desktop where the toggle is hidden.
        const setExpandedState = () => {
            menuToggle.setAttribute('aria-expanded', menu.classList.contains('mzp-is-active'));
        };

        // Make the menu more accessible
        menuToggle.setAttribute('tabindex', '0');
        menuToggle.setAttribute('role', 'button');
        setExpandedState();

        // Toggle the sidebar menu
        menuToggle.addEventListener('click', (e) => {
            e.preventDefault();
            menu.classList.toggle('mzp-is-active');

            setExpandedState();
        }, false);
    }
};

module.exports = MzpSideMenu;
