/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// create namespace
if (typeof Mzp === 'undefined') { // eslint-disable-line block-scoped-var
    var Mzp = {};
}

(function() {
    'use strict';

    var Modal = {};
    var open = false;
    var body = document.body;
    var html = document.documentElement;
    var options = {};
    var pageContentParent;
    var pageContent;
    var modal;

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
    Modal.createModal = function(origin, content, opts) {
        options = opts;

        var isSmallViewport = window.innerWidth < 760;

        // Make sure modal is closed (if one exists)
        if (open) {
            Modal.closeModal();
        }

        // Create new modal
        var title = (options && options.title) ? options.title : '';
        var className = (options && options.className) ? options.className : '';
        var closeText = (options && options.closeText) ? options.closeText : '';

        var modalFragment =
            '<div class="mzp-c-modal ' + className + '" role="dialog" aria-labelledby="' + origin.getAttribute('id') + '" tabindex="-1">' +
            '  <div class="mzp-c-modal-window">' +
            '    <div class="mzp-c-modal-inner">' +
            '      <header><h2>' + title + '</h2></header>' +
            '      <div class="mzp-c-modal-close">' +
            '        <button type="button" class="mzp-c-modal-button-close">' + closeText + '</button>' +
            '      </div>' +
            '    </div>' +
            '  </div>' +
            '</div>';

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

        var modalInner = document.querySelector('.mzp-c-modal-inner');
        modalInner.appendChild(content);

        content.classList.add('mzp-c-modal-overlay-contents');

        // close modal on clicking close button or background.
        var closeButton = document.querySelector('.mzp-c-modal-button-close');
        closeButton.addEventListener('click', Modal.closeModal, false);
        closeButton.setAttribute('title', closeText);

        // close modal on clicking the background (but not bubbled event).
        document.querySelector('.mzp-c-modal .mzp-c-modal-window').addEventListener('click', function (e) {
            if (e.target === this) {
                Modal.closeModal();
            }
        }, false);

        modal.focus();

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

    var _onDocumentKeyUp = function(e) {
        if (e.keyCode === 27 && open) {
            Modal.closeModal();
        }
    };

    var _onDocumentFocus = function(e) {
        // .contains must be called on the underlying HTML element, not the jQuery object
        if (open && !modal.contains(e.target)) {
            e.stopPropagation();
            modal.focus();
        }
    };

    Modal.closeModal = function(e) {
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
        var origin = document.querySelector('.mzp-c-modal-origin');
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

    window.Mzp.Modal = Modal;

})();
