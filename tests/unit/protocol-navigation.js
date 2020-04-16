/* global describe, beforeEach, afterEach, it, expect, spyOn */

describe('protocol-navigation.js', function() {

    'use strict';

    beforeEach(function () {
        var nav = '<div class="mzp-c-navigation">' +
                    '<div class="mzp-c-navigation-l-content">' +
                      '<div class="mzp-c-navigation-container">' +
                          '<button class="mzp-c-navigation-menu-button" type="button" aria-controls="map-c-navigation-items">Menu</button>' +
                          '<div class="mzp-c-navigation-logo"><a href="https://www.mozilla.org/">Mozilla</a></div>' +
                          '<div class="mzp-c-navigation-items" id="map-c-navigation-items">' +
                            '<div class="mzp-c-navigation-items-container"></div>' +
                          '</div>' +
                      '</div>' +
                    '</div>' +
                  '</div>';
        document.documentElement.insertAdjacentHTML('beforeend', nav);

        spyOn(Mzp.Navigation, 'supportsSticky').and.returnValue(true);
    });

    afterEach(function(){
        var node = document.querySelector('.mzp-c-navigation');
        if (node.parentNode) {
            node.parentNode.removeChild(node);
        }
    });

    describe('interactions', function () {

        it('should open and close as expected', function() {
            var button = document.querySelector('.mzp-c-navigation-menu-button');
            var menu = document.querySelector('.mzp-c-navigation-items');
            var options = {
                open: function() {}, // eslint-disable-line no-empty-function
                close: function() {} // eslint-disable-line no-empty-function
            };

            spyOn(options, 'open');
            spyOn(options, 'close');

            Mzp.Navigation.init({
                onNavOpen: options.open,
                onNavClose: options.close
            });
            button.click();

            expect(menu.classList.contains('mzp-is-open')).toBeTruthy();
            expect(button.classList.contains('mzp-is-active')).toBeTruthy();
            expect(options.open).toHaveBeenCalled();

            button.click();

            expect(menu.classList.contains('mzp-is-open')).toBeFalsy();
            expect(button.classList.contains('mzp-is-active')).toBeFalsy();
            expect(options.close).toHaveBeenCalled();
        });
    });

    describe('sticky behaviour', function() {

        it('should not initialize sticky behaviour by default', function() {
            spyOn(Mzp.Navigation, 'initSticky');

            Mzp.Navigation.init();
            expect(Mzp.Navigation.initSticky).not.toHaveBeenCalled();
        });

        it('should initialize sticky behaviour when specified', function() {
            document.querySelector('.mzp-c-navigation').classList.add('mzp-is-sticky');
            spyOn(Mzp.Navigation, 'initSticky');

            Mzp.Navigation.init();
            expect(Mzp.Navigation.initSticky).toHaveBeenCalled();
        });

        it('should create sticky behaviour for large viewports', function() {
            document.querySelector('.mzp-c-navigation').classList.add('mzp-is-sticky');
            spyOn(Mzp.Navigation, 'isLargeViewport').and.returnValue(true);
            spyOn(Mzp.Navigation, 'createSticky');
            Mzp.Navigation.init();
            expect(Mzp.Navigation.createSticky).toHaveBeenCalled();
        });

        it('should not create sticky behaviour for small viewports', function() {
            document.querySelector('.mzp-c-navigation').classList.add('mzp-is-sticky');
            spyOn(Mzp.Navigation, 'isLargeViewport').and.returnValue(false);
            spyOn(Mzp.Navigation, 'createSticky');
            Mzp.Navigation.init();
            expect(Mzp.Navigation.createSticky).not.toHaveBeenCalled();
        });
    });
});
