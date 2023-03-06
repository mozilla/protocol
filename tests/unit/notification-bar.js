import MzpNotification from '../../assets/js/protocol/notification-bar.js';

describe('notification-bar.js', function() {

    beforeEach(function () {
        const details =
            '<button class="mzp-c-button">Open Notification</button>';

        document.documentElement.insertAdjacentHTML('afterbegin', details);
    });

    afterEach(function(){
        const node = document.querySelector('.mzp-c-button');
        if (node) {
            node.parentNode.removeChild(node);
        }
    });

    describe('interactions', function () {

        const options = {
            open: function () {}, // eslint-disable-line no-empty-function
            close: function () {} // eslint-disable-line no-empty-function
        };

        beforeEach(function () {
            spyOn(options, 'open');
            spyOn(options, 'close');

            const button = document.querySelector('.mzp-c-button');

            button.addEventListener('click', function (e) {
                e.preventDefault();

                MzpNotification.init(button, {
                    hasDismiss: true,
                    onNotificationOpen: options.open,
                    onNotificationClose: options.close
                });
            });

            button.click();
        });

        afterEach(function(){
            const node = document.querySelector('.mzp-c-notification-bar');
            if (node) {
                node.parentNode.removeChild(node);
            }
        });

        it('opens as expected', function() {
            expect(options.open).toHaveBeenCalled();

            const notification = document.querySelector('.mzp-c-notification-bar');
            expect(notification).toBeTruthy();
        });

        it('closes as expected', function() {
            const dismissButton = document.querySelector('.mzp-c-notification-bar-button');
            dismissButton.click();
            expect(options.close).toHaveBeenCalled();

            const notification = document.querySelector('.mzp-c-notification-bar');
            expect(notification).toEqual(null);
        });

    });

    describe('interactions-with-cta-no-attrs', function () {

        const options = {
            open: function () {}, // eslint-disable-line no-empty-function
            close: function () {} // eslint-disable-line no-empty-function
        };

        beforeEach(function () {
            spyOn(options, 'open');
            spyOn(options, 'close');

            const button = document.querySelector('.mzp-c-button');

            button.addEventListener('click', (e) => {
                e.preventDefault();

                MzpNotification.init(button, {
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
            const node = document.querySelector('.mzp-c-notification-bar');
            if (node) {
                node.parentNode.removeChild(node);
            }
        });

        it('opens as expected, with a CTA', function() {
            expect(options.open).toHaveBeenCalled();

            const notification = document.querySelector('.mzp-c-notification-bar');
            expect(notification).toBeTruthy();

            const cta = document.querySelector('.mzp-c-notification-bar-cta');
            expect(cta).toBeTruthy();
        });

        it('closes as expected', function() {
            const dismissButton = document.querySelector('.mzp-c-notification-bar-button');
            dismissButton.click();
            expect(options.close).toHaveBeenCalled();

            const notification = document.querySelector('.mzp-c-notification-bar');
            expect(notification).toEqual(null);
        });
    });

    describe('interactions-with-cta-extra-attrs', function () {

        const options = {
            open: function () {}, // eslint-disable-line no-empty-function
            close: function () {} // eslint-disable-line no-empty-function
        };

        beforeEach(function () {
            spyOn(options, 'open');
            spyOn(options, 'close');

            const button = document.querySelector('.mzp-c-button');

            button.addEventListener('click', (e) => {
                e.preventDefault();

                MzpNotification.init(button, {
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
            const node = document.querySelector('.mzp-c-notification-bar');
            if (node) {
                node.parentNode.removeChild(node);
            }
        });

        it('opens as expected, with a CTA featuring the extra attributes', function() {
            expect(options.open).toHaveBeenCalled();

            const notification = document.querySelector('.mzp-c-notification-bar');
            expect(notification).toBeTruthy();

            const cta = document.querySelector('.mzp-c-notification-bar-cta');
            expect(cta).toBeTruthy();
            expect(cta.getAttribute('target')).toBe('_blank');
            expect(cta.getAttribute('rel')).toBe('nofollow');
            expect(cta.getAttribute('hreflang')).toBe('en-US');
        });

        it('closes as expected', function() {
            const dismissButton = document.querySelector('.mzp-c-notification-bar-button');
            dismissButton.click();
            expect(options.close).toHaveBeenCalled();

            const notification = document.querySelector('.mzp-c-notification-bar');
            expect(notification).toEqual(null);
        });
    });
});
