/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const MzpDetails = {};
let _count = 0;

MzpDetails.isSupported = () => {
    if (typeof window.MzpSupports !== 'undefined' && typeof window.MzpUtils !== 'undefined') {
        return window.MzpSupports.classList;
    } else {
        return false;
    }
};

/**
 * open
 * @param {String} id - id of the container to open
 * @param {Object} options - configurable options
 */
MzpDetails.open = (id, options) => {
    const control = document.querySelector(`[aria-controls=${id}]`);
    const details = document.getElementById(id);
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
MzpDetails.close = (id, options) => {
    const control = document.querySelector(`[aria-controls=${id}]`);
    const details = document.getElementById(id);
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
MzpDetails.toggle = (id, options) => {
    const details = document.getElementById(id);
    const isClosed = details.getAttribute('aria-hidden');

    if (isClosed === 'true') {
        MzpDetails.open(id, options);
    } else {
        MzpDetails.close(id, options);
    }
};

/**
 * handleControlActivation
 * @param {Event} e - event to handle
 * @param {Object} options - configurable options
 */
MzpDetails.handleControlActivation = (e, options) => {
    const control = e.target;
    const id = control.getAttribute('aria-controls');
    MzpDetails.toggle(id, options);
};

/**
 * initItem
 * @param {Object} el - Element to place the control inside of
 * @param {String} selector - Selector for all control wrappers
 * - assumes every sibling until the next control is associated with the control
 * @param {Object} options - configurable options
 */
MzpDetails.initItem = (el, selector, options) => {
    const summary = el;
    const control = document.createElement('button');
    let details;
    const parent = summary.parentNode;

    // if it's already been initialized, don't do it again
    if (summary.querySelectorAll('button').length !== 0) {
        return;
    }

    // Expand
    // siblings of the summary, until next summary
    const summarySiblings = window.MzpUtils.nextUntil(summary, selector);

    // look to see if all children are already in a wrapper we can use
    if (summarySiblings.length === 1) {
        details = summarySiblings[0];
    } else if (summarySiblings.length > 1){
        details = document.createElement('div');
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
        const unique = selector.replace(/[^a-zA-Z]+/g, '');
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
        MzpDetails.handleControlActivation(e, options);
    }, false);
    // copy the summary's contents into the control
    const summaryChildren = Array.prototype.slice.call(summary.childNodes);
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
MzpDetails.destroyItem = (el) => {
    const summary = el;
    const parent = summary.parentNode;
    const details = summary.nextElementSibling;
    const control = summary.querySelector('button');

    // if it's already been destroyed, don't do it again
    if (summary.querySelectorAll('button').length === 0) {
        return;
    }

    parent.classList.remove('is-details');
    details.removeAttribute('aria-hidden');
    details.classList.remove('is-closed');
    // move control's contents back to summary
    const controlChildren = Array.prototype.slice.call(control.childNodes);
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
MzpDetails.init = (selector, options) => {
    if (!MzpDetails.isSupported()) {
        return;
    }
    if (typeof options === 'undefined') {
        options = {};
    }

    const summaries = document.querySelectorAll(selector);
    // loop through controls on the page and init them one at a time
    for (let i = 0; i < summaries.length; i++) {
        MzpDetails.initItem(summaries[i], selector, options);
    }
};

/**
 * Destroy
 * @param {Object} selector - CSS selector matching "summary" elements
 * @param {Object} options - configurable options
 */
MzpDetails.destroy = (selector, options) => {
    const summaries = document.querySelectorAll(selector, options);
    // loop through controls on the page and destroy them one at a time
    for (let i = 0; i < summaries.length; i++) {
        MzpDetails.destroyItem(summaries[i], selector, options);
    }
};

module.exports = MzpDetails;
