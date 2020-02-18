/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// create namespace
if (typeof Mzp === 'undefined') { // eslint-disable-line block-scoped-var
    var Mzp = {};
}

(function() {
    'use strict';

    var Notification = {};
    var options = {};

    /*
    origin: element that triggered the notification.
    options: object of params:
        title: title to display inside the notification. [required]
        cta: [Object] options for rendering an Anchor node after the title.
            text: text content for an Anchor element
            url: URL for the Anchor element
            attrs: map of additional options for the Anchor element, eg 'target', 'rel' etc
        className: CSS class name to apply to the notification.
        closeText: 'string to use for close button a11y.
        hasDismiss: boolean - include or not include dismiss button.
        isSticky: boolean - determines if notification is absolutely positioned and sticky.
        onNotificationOpen: function to fire after notification has been opened.
        onNotificationClose: function to fire after notification has been closed.
    */

    Notification.init = function(origin, opts) {

        if (typeof opts === 'object') {
            for (var i in opts) {
                if (opts.hasOwnProperty(i)) {
                    options[i] = opts[i];
                }
            }
        }

        // Create new notification
        var title = document.createTextNode(options.title);
        var className = (options && options.className) ? options.className : '';
        var closeText = (options && options.closeText) ? options.closeText : '';
        var isSticky = (options && options.isSticky) ? 'mzp-is-sticky' : '';
        var ctaOptions = options && options.cta ? options.cta : {};

        var notification = document.createElement('aside');
        notification.className = 'mzp-c-notification-bar ' + className + ' ' + isSticky;

        // Notification Title

        if (options && options.title){

            var notificationTitle = document.createElement('p');
            notificationTitle.appendChild(title);

            // add title to notification
            notification.appendChild(notificationTitle);
        }

        // Notification CTA link
        if (options && options.cta) {
            var ctaAnchor = document.createElement('a'),
                ctaAttrs = ctaOptions.attrs ? ctaOptions.attrs : {};

            // build main <a> element, with the appropriate CSS class
            ctaAnchor.appendChild(document.createTextNode(ctaOptions.text));
            ctaAnchor.href = ctaOptions.url;
            ctaAnchor.className = 'mzp-c-notification-bar-cta';

            // If there are any extra attrs, add them to the element
            var key;
            for (key in ctaAttrs){
                ctaAnchor.setAttribute(key, ctaAttrs[key]);
            }
            notification.appendChild(ctaAnchor);
        }

        // Notification Fragment
        var notificationFragment = document.createDocumentFragment();
        notificationFragment.appendChild(notification);

        // Dismiss Button
        var dismissButton = '<button class="mzp-c-notification-bar-button" type="button">' + closeText + '</button>';

        // Show button & add event listener
        if (options && options.hasDismiss){
            notificationFragment.childNodes[0].insertAdjacentHTML('afterbegin', dismissButton);

            var button = notificationFragment.querySelector('.mzp-c-notification-bar-button');

            button.setAttribute('title', closeText);
            button.addEventListener('click', _closeNotification, false);
        }

        // Add notification to page
        document.body.insertBefore(notificationFragment, document.body.childNodes[0]);

        // Remember which element opened the notification for later focus
        origin.classList.add('mzp-c-notification-origin');


        // Execute (optional) open callback
        if (options && typeof(options.onNotificationOpen) === 'function') {
            options.onNotificationOpen();
        }
    };

    var _closeNotification = function(e) {

        // remove notification from the page
        e.currentTarget.parentNode.remove();

        // execute (optional) callback
        if (options && typeof(options.onNotificationClose) === 'function') {
            options.onNotificationClose(e.target);
        }

        // free up options
        options = {};

        // restore focus to element that opened the notification
        var origin = document.querySelector('.mzp-c-notification-origin');
        origin.focus();
        origin.classList.remove('mzp-c-notification-origin');
    };

    window.Mzp.Notification = Notification;

})(window);
