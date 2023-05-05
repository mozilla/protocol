/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const MzpSupports = {};

/**
* matchMedia
* @return {Boolean} boolean value for if the browser supports matchMedia
*/
MzpSupports.matchMedia = (function() {
    return typeof window.matchMedia !== 'undefined' && window.matchMedia('all').addListener;
}());

/**
* requestAnimationFrame
* @return {Boolean} boolean value for if the browser supports requestAnimationFrame
*/
MzpSupports.requestAnimationFrame = (function() {
    return 'requestAnimationFrame' in window;
}());

/**
* cssFeatureQueries
* @return {Boolean} boolean value for if the browser supports cssFeatureQueries
*/
MzpSupports.cssFeatureQueries = (function() {
    return typeof CSS !== 'undefined' && typeof CSS.supports !== 'undefined';
}());

/**
* classList
* @return {Boolean} boolean value for if the browser supports classList
*/
MzpSupports.classList = (function() {
    return 'classList' in document.createElement('div');
}());

/**
 * details
 * @return {Boolean} boolean value for if the browser supports the details/summary elements
 * - feature detection for HTML5 detail/summary support
 * - https://mathiasbynens.be/notes/html5-details-jquery#comment-35
 */
MzpSupports.details = (function() {
    const el = document.createElement('details');
    let fake;
    let diff;
    if (!('open' in el)) {
        return false;
    }
    const root = document.body || (function() {
        const de = document.documentElement;
        fake = true;
        return de.insertBefore(document.createElement('body'), de.firstElementChild || de.firstChild);
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

module.exports = MzpSupports;
