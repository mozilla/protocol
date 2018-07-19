// create namespace
if (typeof Mozilla === 'undefined') {
    var Mozilla = {};
}

(function() {
    'use strict';

    var Navigation = {};
    var menu = document.querySelector('.mzp-c-navigation-items');

    Navigation.init = function() {
        document.querySelector('.mzp-c-navigation-menu-button').addEventListener('click', function(e) {
            e.preventDefault();

            menu.classList.toggle('open');
        });
    };

    Navigation.init();

    window.Mozilla.Navigation = Navigation;

})();
