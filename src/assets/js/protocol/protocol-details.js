/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */


// create namespace
if (typeof Mzp === 'undefined') { // eslint-disable-line block-scoped-var
    var Mzp = {};
}

(function(doc, Mzp) {
    'use strict';

    var Details = {};
    var _count = 0;

    Details.isSupported = function() {
        if (typeof Mzp.Supports !== 'undefined' && typeof Mzp.Utils !== 'undefined') {
            return Mzp.Supports.classList;
        } else {
            return false;
        }
    };

    /**
     * open
     * @param {String} id - id of the container to open
     * @param {Object} options - configurable options
     */
    Details.open = function(id, options) {
        var control = doc.querySelector('[aria-controls=' + id + ']');
        var details = doc.getElementById(id);
        control.setAttribute('aria-expanded', true);
        details.setAttribute('aria-hidden', false);
        details.classList.remove('is-closed');
        if (typeof options.onDetailsOpen === 'function') {
            options.onDetailsOpen(details);
        }
    };

    /**
     * close
     * @param {String} id - id of the container to close
     * @param {Object} options - configurable options
     */
    Details.close = function(id, options) {
        var control = doc.querySelector('[aria-controls=' + id + ']');
        var details = doc.getElementById(id);
        control.setAttribute('aria-expanded', false);
        details.setAttribute('aria-hidden', true);
        details.classList.add('is-closed');
        if (typeof options.onDetailsClose === 'function') {
            options.onDetailsClose(details);
        }
    };

    /**
     * toggle
     * @param {String} id - id of the container to toggle
     * @param {Object} options - configurable options
     */
    Details.toggle = function(id, options) {
        var details = doc.getElementById(id);
        var isClosed = details.getAttribute('aria-hidden');

        if (isClosed === 'true') {
            Details.open(id, options);
        } else {
            Details.close(id, options);
        }
    };

    /**
     * handleControlActivation
     * @param {Event} e - event to handle
     * @param {Object} options - configurable options
     */
    Details.handleControlActivation = function(e, options) {
        var control = e.target;
        var id = control.getAttribute('aria-controls');
        Details.toggle(id, options);
    };

    /**
     * initItem
     * @param {Object} el - Element to place the control inside of
     * @param {String} selector - Selector for all control wrappers
     * - assumes every sibling until the next control is associated with the control
     * @param {Object} options - configurable options
     */
    Details.initItem = function(el, selector, options) {
        var summary = el;
        var control = doc.createElement('button');
        var details;
        var parent = summary.parentNode;
        var summarySiblings;

        // if it's already been initalized, don't do it again
        if (summary.querySelectorAll('button').length !== 0) {
            return;
        }

        // Expand
        // siblings of the summary, until next summary
        summarySiblings = Mzp.Utils.nextUntil(summary, selector);

        // look to see if all children are already in a wrapper we can use
        if (summarySiblings.length === 1) {
            details = summarySiblings[0];
        } else if (summarySiblings.length > 1){
            details = doc.createElement('div');
            summarySiblings.forEach(function(sibling) {
                details.appendChild(sibling);
            });
            summary.parentNode.insertBefore(details, summary.nextSibling);
        } else {
            // no children were found, something is probably wrong, let's stop here
            return;
        }

        // add class to parent to indicate js initialized
        parent.classList.add('is-details');

        // add class to content wrapper
        details.classList.add('mzp-js-details-wrapper');

        // look for existing ID to use
        if(!details.id) {
            // if details already has ID, use that, if not assign one using the selector minus all not-letters
            var unique = selector.replace(/[^a-zA-Z]+/g, '');
            details.id = 'expand-' + unique + '-'+ _count;
            _count += 1;
        }

        // close by default
        // TODO: add support for open attribute
        details.setAttribute('aria-hidden', true);
        details.classList.add('is-closed');

        // Control
        control.setAttribute('type', 'button');
        // add aria-controls
        control.setAttribute('aria-controls', details.id);
        // add aria-expanded
        control.setAttribute('aria-expanded', false);
        // add listener
        control.addEventListener('click', function(e) {
            Details.handleControlActivation(e, options);
        }, false);
        // copy the summary's contents into the control
        var summaryChildren = Array.prototype.slice.call(summary.childNodes);
        summaryChildren.forEach(function(child) {
            control.appendChild(child);
        });
        // append control element
        summary.appendChild(control);
        summary.classList.add('is-summary');
    };

    /**
     * destroyItem
     * @param {Object} el - Element the control was placed inside of
     * - does not attempt to remove the details wrapper
     */
    Details.destroyItem = function(el) {
        var summary = el;
        var parent = summary.parentNode;
        var details = summary.nextElementSibling;
        var control = summary.querySelector('button');

        // if it's already been destroyed, don't do it again
        if (summary.querySelectorAll('button').length === 0) {
            return;
        }

        parent.classList.remove('is-details');
        details.removeAttribute('aria-hidden');
        details.classList.remove('is-closed');
        // move control's contents back to summary
        var controlChildren = Array.prototype.slice.call(control.childNodes);
        controlChildren.forEach(function(child) {
            summary.appendChild(child);
        });
        summary.removeChild(control);
        summary.classList.remove('is-summary');
    };

    /**
     * Init
     * @param {Object} selector - CSS selector matching "summary" elements
     * @param {Object} options - configurable options
         - passed in to the init function and passed around from there
         example:
         var testOptions = {
             onDetailsOpen : myDetailsOpenCallback(),
             onDetailsClose : function(){ //anonymous callback }
         };
     */
    Details.init = function(selector, options) {
        if (!Details.isSupported()) {
            return;
        }
        if (typeof options === 'undefined') {
            options = {};
        }

        var summaries = doc.querySelectorAll(selector);
        // loop through controls on the page and init them one at a time
        for (var i = 0; i < summaries.length; i++) {
            Details.initItem(summaries[i], selector, options);
        }
    };

    /**
     * Destroy
     * @param {Object} selector - CSS selector matching "summary" elements
     * @param {Object} options - configurable options
     */
    Details.destroy = function(selector, options) {
        var summaries = doc.querySelectorAll(selector, options);
        // loop through controls on the page and destroy them one at a time
        for (var i = 0; i < summaries.length; i++) {
            Details.destroyItem(summaries[i], selector, options);
        }
    };

    // check if details is supported, if not, init this as a polyfill
    if (typeof Mzp.Supports !== 'undefined') {
        // not supported, add support
        if(!Mzp.Supports.details) {
            Details.init('summary');
        }
    }

    // init generic class indicating headings should be made into open/close componenet
    Details.init('.mzp-c-details > h2');
    Details.init('.mzp-c-details > h3');
    Details.init('.mzp-c-details > h4');
    Details.init('.mzp-c-details > h5');
    Details.init('.mzp-c-details > h6');

    Mzp.Details = Details;

})(document, window.Mzp);
