/* global describe, beforeEach, it, spyOn */

describe('protocol-notification.js', function() {

    'use strict';

    beforeEach(function () {
        var details =
            '<button class="mzp-c-button">Open Notification</button>';

        document.documentElement.insertAdjacentHTML('afterbegin', details);
    });

    afterEach(function(){
        var node = document.querySelector('.mzp-c-button');
        if (node) {
            node.parentNode.removeChild(node);
        }
    });

    describe('interactions', function () {

        var options = {
            open: function () {}, // eslint-disable-line no-empty-function
            close: function () {} // eslint-disable-line no-empty-function
        };

        beforeEach(function () {
            spyOn(options, 'open');
            spyOn(options, 'close');

            var button = document.querySelector('.mzp-c-button');

            button.addEventListener('click', function (e) {
                e.preventDefault();

                Mzp.Notification.init(button, {
                    hasDismiss: true,
                    onNotificationOpen: options.open,
                    onNotificationClose: options.close
                });
            });

            button.click();
        });

        afterEach(function(){
            var node = document.querySelector('.mzp-c-notification-bar');
            if (node) {
                node.parentNode.removeChild(node);
            }
        });

        it('opens as expected', function() {
            expect(options.open).toHaveBeenCalled();

            var notification = document.querySelector('.mzp-c-notification-bar');
            expect(notification).toBeTruthy();
        });

        it('closes as expected', function() {
            var dismissButton = document.querySelector('.mzp-c-notification-bar-button');
            dismissButton.click();
            expect(options.close).toHaveBeenCalled();

            var notification = document.querySelector('.mzp-c-notification-bar');
            expect(notification).toEqual(null);
        });

    });

    describe('interactions-with-cta-no-attrs', function () {

        var options = {
            open: function () {}, // eslint-disable-line no-empty-function
            close: function () {} // eslint-disable-line no-empty-function
        };

        beforeEach(function () {
            spyOn(options, 'open');
            spyOn(options, 'close');

            var button = document.querySelector('.mzp-c-button');

            button.addEventListener('click', function (e) {
                e.preventDefault();

                Mzp.Notification.init(button, {
                    cta: {
                        text: 'This is a call to action',
                        url: 'https://example.com/test/url',
                    },
                    hasDismiss: true,
                    onNotificationOpen: options.open,
                    onNotificationClose: options.close
                });
            });

            button.click();
        });

        afterEach(function(){
            var node = document.querySelector('.mzp-c-notification-bar');
            if (node) {
                node.parentNode.removeChild(node);
            }
        });

        it('opens as expected, with a CTA', function() {
            expect(options.open).toHaveBeenCalled();

            var notification = document.querySelector('.mzp-c-notification-bar');
            expect(notification).toBeTruthy();

            var cta = document.querySelector('.mzp-c-notification-bar-cta');
            expect(cta).toBeTruthy();
        });

        it('closes as expected', function() {
            var dismissButton = document.querySelector('.mzp-c-notification-bar-button');
            dismissButton.click();
            expect(options.close).toHaveBeenCalled();

            var notification = document.querySelector('.mzp-c-notification-bar');
            expect(notification).toEqual(null);
        });
    });

    describe('interactions-with-cta-extra-attrs', function () {

        var options = {
            open: function () {}, // eslint-disable-line no-empty-function
            close: function () {} // eslint-disable-line no-empty-function
        };

        beforeEach(function () {
            spyOn(options, 'open');
            spyOn(options, 'close');

            var button = document.querySelector('.mzp-c-button');

            button.addEventListener('click', function (e) {
                e.preventDefault();

                Mzp.Notification.init(button, {
                    cta: {
                        text: 'This is a call to action',
                        url: 'https://example.com/test/url',
                        attrs: {
                            'target': '_blank',
                            'rel': 'nofollow',
                            'hreflang': 'en-US',
                        }
                    },
                    hasDismiss: true,
                    onNotificationOpen: options.open,
                    onNotificationClose: options.close
                });
            });

            button.click();
        });

        afterEach(function(){
            var node = document.querySelector('.mzp-c-notification-bar');
            if (node) {
                node.parentNode.removeChild(node);
            }
        });

        it('opens as expected, with a CTA featuring the extra attributes', function() {
            expect(options.open).toHaveBeenCalled();

            var notification = document.querySelector('.mzp-c-notification-bar');
            expect(notification).toBeTruthy();

            var cta = document.querySelector('.mzp-c-notification-bar-cta');
            expect(cta).toBeTruthy();
            expect(cta.getAttribute('target')).toBe('_blank');
            expect(cta.getAttribute('rel')).toBe('nofollow');
            expect(cta.getAttribute('hreflang')).toBe('en-US');
        });

        it('closes as expected', function() {
            var dismissButton = document.querySelector('.mzp-c-notification-bar-button');
            dismissButton.click();
            expect(options.close).toHaveBeenCalled();

            var notification = document.querySelector('.mzp-c-notification-bar');
            expect(notification).toEqual(null);
        });
    });
});
