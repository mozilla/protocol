/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// create namespace
if (typeof Mzp === 'undefined') { // eslint-disable-line block-scoped-var
    var Mzp = {};
}

Mzp.Notification = (function() { // eslint-disable-line block-scoped-var
    'use strict';

    var options = {};

    /*
    options: object of optional params:
        title: title to display inside the notification.
        className: optional CSS class name to apply to the notification.
        closeText: 'string to use for close button a11y.
        hasDismiss: boolean - include or not include dismiss button.
        isSticky: boolean - determines if notification is absolutely positioned and sticky.
    */

    var _init = function(origin, opts) {
        options = opts;

        // Create new notification
        var title = (options && options.title) ? options.title : '';
        var className = (options && options.className) ? options.className : '';
        var closeText = (options && options.closeText) ? options.closeText : '';
        var isSticky = (options && options.isSticky) ? 'mzp-is-sticky' : '';

        // Notification Fragment
        var notificationFragment = document.createRange().createContextualFragment(
            '<aside class="mzp-c-notification-bar ' + className + ' ' + isSticky + '">' +
            '   <p class="mzp-c-notification-bar-content">' + title + '</p>' +
            '</aside>'
        );

        // Dismiss Button
        var dismissButton = '<button class="mzp-c-notification-bar-button" type="button">' + closeText + '</button>';

        // Show button & add event listener
        if (options && options.hasDismiss){
            notificationFragment.childNodes[0].insertAdjacentHTML('beforeend', dismissButton);

            var button = notificationFragment.querySelector('.mzp-c-notification-bar-button');

            button.setAttribute('title', closeText);
            button.addEventListener('click', function(e) {
                _closeNotification(e);
            });
        }


        // Add notification to page
        document.body.insertBefore(notificationFragment, document.body.childNodes[0]);

        // Remember which element opened the notification for later focus
        origin.classList.add('mzp-c-notification-origin');


        // Execute (optional) open callback
        if (options && typeof(options.onCreate) === 'function') {
            options.onCreate();
        }
    };

    var _closeNotification = function(e) {

        // remove notification from the page
        e.currentTarget.parentNode.remove();

        // execute (optional) callback
        if (options && typeof(options.onDestroy) === 'function') {
            options.onDestroy();
        }

        // free up options
        options = {};

        // restore focus to element that opened the notification
        var origin = document.querySelector('.mzp-c-notification-origin');
        origin.focus();
        origin.classList.remove('mzp-c-notification-origin');
    };

    return {
        init: function(origin, opts) {
            _init(origin, opts);
        }
    };
})(window);
