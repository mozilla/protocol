(function() {
    'use strict';

    var nav = document.getElementById('protosite-nav-main');
    var navToggle = document.querySelector('.protosite-nav-main-head .protosite-js-nav-toggle');

    navToggle.addEventListener('click', function(event) {
        event.preventDefault();
        nav.classList.toggle('mzp-is-active');
    }, false);
})();
