/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */


// create namespace
if (typeof Mzp === 'undefined') { // eslint-disable-line block-scoped-var
    var Mzp = {};
}

(function(doc) {
    'use strict';

    var Supports = {};

    /**
    * matchMedia
    * @return {Boolean} boolean value for if the browser supports matchMedia
    */
    Supports.matchMedia = (function() {
        return typeof window.matchMedia !== 'undefined' && window.matchMedia('all').addListener;
    }());

    /**
    * requestAnimationFrame
    * @return {Boolean} boolean value for if the browser supports requestAnimationFrame
    */
    Supports.requestAnimationFrame = (function() {
        return 'requestAnimationFrame' in window;
    }());

    /**
    * cssFeatureQueries
    * @return {Boolean} boolean value for if the browser supports cssFeatureQueries
    */
    Supports.cssFeatureQueries = (function() {
        return typeof CSS !== 'undefined' && typeof CSS.supports !== 'undefined';
    }());

    /**
    * classList
    * @return {Boolean} boolean value for if the browser supports classList
    */
    Supports.classList = (function() {
        return 'classList' in document.createElement('div');
    }());

    /**
     * details
     * @return {Boolean} boolean value for if the browser supports the details/summary elements
     * - feature detection for HTML5 detail/summary support
     * - https://mathiasbynens.be/notes/html5-details-jquery#comment-35
     */
    Supports.details = (function() {
        var el = doc.createElement('details');
        var fake;
        var root;
        var diff;
        if (!('open' in el)) {
            return false;
        }
        root = doc.body || (function() {
            var de = doc.documentElement;
            fake = true;
            return de.insertBefore(doc.createElement('body'), de.firstElementChild || de.firstChild);
        }());
        el.innerHTML = '<summary>a</summary>b';
        el.style.display = 'block';
        root.appendChild(el);
        diff = el.offsetHeight;
        el.open = true;
        diff = diff !== el.offsetHeight;
        root.removeChild(el);
        if (fake) {
            root.parentNode.removeChild(root);
        }
        return diff;
    }());

    window.Mzp.Supports = Supports;
})(document);
