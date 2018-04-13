(function() {
    'use strict';

    var $doc = document.documentElement;

    // Add class to reflect javascript availability for CSS
    $doc.className = $doc.className.replace(/\bno-js\b/, 'js');

    var nav = document.getElementById('protosite-nav-main');
    var navToggle = document.querySelector('.protosite-nav-main-head .protosite-js-nav-toggle');

    navToggle.addEventListener('click', event => {
        event.preventDefault();
        nav.classList.toggle('mzp-is-active');
    });
})();
