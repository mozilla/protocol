/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const MzpModal = {};
let open = false;
const body = document.body;
const html = document.documentElement;
let options = {};
let pageContentParent;
let pageContent;
let modal;

/*
origin: element that triggered the modal
content: content to display in the modal
options: object of optional params:
    title: title to display at the top of the modal.
    className: optional CSS class name to apply to the modal window.
    onCreate: function to fire after modal has been created.
    onDestroy: function to fire after modal has been closed.
    allowScroll: boolean - allow/restrict page scrolling when modal is open.
    closeText: string to use for close button a11y.
*/
MzpModal.createModal = (origin, content, opts) => {
    options = opts;

    const isSmallViewport = window.innerWidth < 760;

    // Make sure modal is closed (if one exists)
    if (open) {
        MzpModal.closeModal();
    }

    // Create new modal
    const title = (options && options.title) ? options.title : '';
    const className = (options && options.className) ? options.className : '';
    const closeText = (options && options.closeText) ? options.closeText : '';

    const modalFragment = `
        <div class="mzp-c-modal ${className}" role="dialog" aria-labelledby="${origin.getAttribute('id')}" tabindex="-1">
            <div class="mzp-c-modal-window">
                <div class="mzp-c-modal-inner">
                    <header><h2>${title}</h2></header>
                    <div class="mzp-c-modal-close">
                        <button type="button" class="mzp-c-modal-button-close">${closeText}</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    if ((options && !options.allowScroll) || isSmallViewport) {
        html.classList.add('mzp-is-noscroll');
    } else {
        html.classList.remove('mzp-is-noscroll');
    }

    // Add modal to page
    body.insertAdjacentHTML('beforeend', modalFragment);

    modal = document.querySelector('.mzp-c-modal');

    pageContent = content;
    pageContentParent = content.parentNode;

    const modalInner = document.querySelector('.mzp-c-modal-inner');
    modalInner.appendChild(content);

    content.classList.add('mzp-c-modal-overlay-contents');

    // ensure focus is moved to the modal only after CSS animation completes.
    // issue: https://github.com/mozilla/protocol/issues/829
    modal.addEventListener('animationend', () => {
        modal.focus();
    }, false);

    // close modal on clicking close button or background.
    const closeButton = document.querySelector('.mzp-c-modal-button-close');
    closeButton.addEventListener('click', MzpModal.closeModal, false);
    closeButton.setAttribute('title', closeText);

    // close modal on clicking the background (but not bubbled event).
    document.querySelector('.mzp-c-modal .mzp-c-modal-window').addEventListener('click', function (e) {
        if (e.target === this) {
            MzpModal.closeModal();
        }
    }, false);

    // close with escape key
    document.addEventListener('keyup', _onDocumentKeyUp, false);

    // prevent focusing out of modal while open
    document.addEventListener('focus', _onDocumentFocus, false);

    // remember which element opened the modal for later focus
    origin.classList.add('mzp-c-modal-origin');

    open = true;

    // execute (optional) open callback
    if (options && typeof(options.onCreate) === 'function') {
        options.onCreate();
    }
};

const _onDocumentKeyUp = (e) => {
    if (e.keyCode === 27 && open) {
        MzpModal.closeModal();
    }
};

const _onDocumentFocus = (e) => {
    // .contains must be called on the underlying HTML element, not the jQuery object
    if (open && !modal.contains(e.target)) {
        e.stopPropagation();
        modal.focus();
    }
};

MzpModal.closeModal = (e) => {
    if (e) {
        e.preventDefault();
    }

    // return modal content to the page
    pageContentParent.appendChild(pageContent);

    // remove modal from the page
    modal.parentNode.removeChild(modal);

    // allow page to scroll again
    html.classList.remove('mzp-is-noscroll');

    // restore focus to element that opened the modal
    const origin = document.querySelector('.mzp-c-modal-origin');
    origin.focus();
    origin.classList.remove('mzp-c-modal-origin');

    open = false;

    // unbind document listeners
    document.removeEventListener('focus', _onDocumentFocus, false);

    // execute (optional) callback
    if (options && typeof(options.onDestroy) === 'function') {
        options.onDestroy();
    }

    // free up options
    options = {};
};

module.exports = MzpModal;
