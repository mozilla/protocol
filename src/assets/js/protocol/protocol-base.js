(function() {
    'use strict';

    var doc = document.documentElement;

    // Add class to reflect javascript availability for CSS
    doc.className = doc.className.replace(/\bno-js\b/, 'js');

})();
