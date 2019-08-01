/* global describe, beforeEach, it, spyOn */

describe('protocol-notification.js', function() {

    'use strict';

    beforeEach(function () {
        var details =
            '<button class="mzp-c-button">Open Notification</button>';

        document.documentElement.insertAdjacentHTML('afterbegin', details);
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
                    onCreate: options.open,
                    onDestroy: options.close
                });
            });
        });

        it('opens as expected', function() {
            var button = document.querySelector('.mzp-c-button');
            button.click();
            expect(options.open).toHaveBeenCalled();
        });

        it('closes as expected', function() {
            var button = document.querySelector('.mzp-c-button');
            button.click();

            var dismissButton = document.querySelector('.mzp-c-notification-bar-button');
            dismissButton.click();
            expect(options.close).toHaveBeenCalled();
        });

    });
});
