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

        var menuExpanded = menuMain.getAttribute('aria-expanded') == 'true' ? 'false' : 'true';
        menuMain.setAttribute('aria-expanded', menuExpanded);
    }, false);

})();
