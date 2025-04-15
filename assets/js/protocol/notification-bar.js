/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const MzpNotification = {};
let options = {};

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

MzpNotification.init = (origin, opts) => {

    if (typeof opts === 'object') {
        for (const i in opts) {
            if (Object.prototype.hasOwnProperty.call(opts, i)) {
                options[i] = opts[i];
            }
        }
    }

    // Create new notification
    const title = document.createTextNode(options.title);
    const className = (options && options.className) ? options.className : '';
    const closeText = (options && options.closeText) ? options.closeText : '';
    const isSticky = (options && options.isSticky) ? 'mzp-is-sticky' : '';
    const ctaOptions = (options && options.cta) ? options.cta : {};

    const notification = document.createElement('aside');
    notification.className = 'mzp-c-notification-bar ' + className + ' ' + isSticky;

    const notificationContent = document.createElement('p');
    notification.appendChild(notificationContent);

    // Notification Title
    if (options && options.title) {
        notificationContent.appendChild(title);
    }

    // Notification CTA link
    if (options && options.cta) {
        const ctaAnchor = document.createElement('a'),
            ctaAttrs = ctaOptions.attrs ? ctaOptions.attrs : {};

        // build main <a> element, with the appropriate CSS class
        ctaAnchor.appendChild(document.createTextNode(ctaOptions.text));
        ctaAnchor.href = ctaOptions.url;
        ctaAnchor.className = 'mzp-c-notification-bar-cta';

        // If there are any extra attrs, add them to the element
        let key;
        for (key in ctaAttrs){
            ctaAnchor.setAttribute(key, ctaAttrs[key]);
        }
        notificationContent.appendChild(ctaAnchor);
    }

    // Notification Fragment
    const notificationFragment = document.createDocumentFragment();
    notificationFragment.appendChild(notification);

    // Dismiss Button
    const dismissButton = '<button class="mzp-c-notification-bar-button" type="button">' + closeText + '</button>';

    // Show button & add event listener
    if (options && options.hasDismiss){
        notificationFragment.childNodes[0].insertAdjacentHTML('afterbegin', dismissButton);

        const button = notificationFragment.querySelector('.mzp-c-notification-bar-button');

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

const _closeNotification = (e) => {

    // remove notification from the page
    e.currentTarget.parentNode.remove();

    // execute (optional) callback
    if (options && typeof(options.onNotificationClose) === 'function') {
        options.onNotificationClose(e.target);
    }

    // free up options
    options = {};

    // restore focus to element that opened the notification
    const origin = document.querySelector('.mzp-c-notification-origin');
    origin.focus();
    origin.classList.remove('mzp-c-notification-origin');
};

module.exports = MzpNotification;
