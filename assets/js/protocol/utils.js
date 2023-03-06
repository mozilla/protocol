/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const MzpUtils = {};

/**
 * Element.matches() polyfill (IE8 support)
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/matches
 * - https://vanillajstoolkit.com/polyfills/matches-ie8/
 */
if (!Element.prototype.matches) {
    Element.prototype.matches =
        Element.prototype.matchesSelector ||
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector ||
        Element.prototype.oMatchesSelector ||
        Element.prototype.webkitMatchesSelector ||
        function (s) {
            const matches = (this.document || this.ownerDocument).querySelectorAll(s);
            let i = matches.length;
            while (--i >= 0 && matches.item(i) !== this) { } // eslint-disable-line no-empty
            return i > -1;
        };
}

/**
 * nextUntil
 * @param {Object} el - Element that you want to get the siblings of
 * @param {String} selector - Selector of the element you want to stop collecting siblings before
 * @param {String} filter - Selector to filter results if you only want siblings matching this pattern
 * @return {Array} - an array of HTML elements
 * - https://gomakethings.com/how-to-get-all-sibling-elements-until-a-match-is-found-with-vanilla-javascript/
 */
MzpUtils.nextUntil = (el, selector, filter) => {
    // Setup siblings array
    const siblings = [];

    // Get the next sibling element
    el = el.nextElementSibling;

    // As long as a sibling exists
    while (el) {

        // If we've reached our match, bail
        if (el.matches(selector)) {
            break;
        }

        // If filtering by a selector, check if the sibling matches
        if (filter && !el.matches(filter)) {
            el = el.nextElementSibling;
            continue;
        }

        // Otherwise, push it to the siblings array
        siblings.push(el);

        // Get the next sibling element
        el = el.nextElementSibling;
    }

    return siblings;
};

module.exports = MzpUtils;
