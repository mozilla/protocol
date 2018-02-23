'use strict';

var $doc = document.documentElement;

// Add class to reflect javascript availability for CSS
$doc.className = $doc.className.replace(/\bno-js\b/, 'js');

var nav = document.getElementById('nav');
var navToggle = document.querySelector('.mds-nav-head .nav-toggle');

navToggle.addEventListener('click', event => {
  event.preventDefault();
  nav.classList.toggle('is-active');
});
