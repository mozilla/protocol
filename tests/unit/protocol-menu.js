/* global describe, beforeEach, afterEach, it, expect, spyOn */

describe('protocol-menu.js', function() {

    'use strict';

    beforeEach(function () {
        var menu = '<nav class="mzp-c-menu">' +
                     '<ul class="mzp-c-menu-category-list">' +
                       '<li class="mzp-c-menu-category mzp-has-drop-down mzp-js-expandable">' +
                          '<a class="mzp-c-menu-title" href="#" aria-haspopup="true" aria-controls="mzp-c-menu-panel-example">Firefox</a>' +
                          '<div class="mzp-c-menu-panel mzp-has-card" id="mzp-c-menu-panel-example">' +
                            '<div class="mzp-c-menu-panel-container">' +
                              '<button class="mzp-c-menu-button-close" type="button" aria-controls="mzp-c-menu-panel-example">Close</button>' +
                              '<div class="mzp-c-menu-panel-content"></div>' +
                            '</div>' +
                          '</div>' +
                       '</li>' +
                      '</ul>' +
                  '</nav>';

        document.documentElement.insertAdjacentHTML('beforeend', menu);
    });

    afterEach(function(){
        var node = document.querySelector('.mzp-c-menu');
        if (node.parentNode) {
            node.parentNode.removeChild(node);
        }
    });

    describe('init', function () {

        it('should use JavaScript events when supported', function() {
            spyOn(Mozilla.Menu, 'isSupported').and.returnValue(true);
            spyOn(Mozilla.Menu, 'handleState');

            Mozilla.Menu.init();

            expect(Mozilla.Menu.handleState).toHaveBeenCalled();
        });

        it('should fallback to basic CSS when not supported', function() {
            spyOn(Mozilla.Menu, 'isSupported').and.returnValue(false);
            spyOn(Mozilla.Menu, 'cssFallback').and.callThrough();

            Mozilla.Menu.init();

            expect(Mozilla.Menu.cssFallback).toHaveBeenCalled();
            expect(document.querySelector('.mzp-c-menu').classList.contains('mzp-c-menu-basic')).toBeTruthy();
        });
    });

    describe('interactions (desktop)', function() {

        var options = {
            open: function() {},
            close: function() {},
            buttonClose: function() {}
        };

        beforeEach(function() {
            spyOn(options, 'open');
            spyOn(options, 'close');
            spyOn(options, 'buttonClose');
            jasmine.clock().install();
        });

        afterEach(function() {
            jasmine.clock().uninstall();
        });

        it('should open and close on mouseenter and mouseleave', function() {
            var item = document.querySelector('.mzp-c-menu-category.mzp-has-drop-down');
            var mockEnterEvent = document.createEvent('HTMLEvents');
            var mockLeaveEvent = document.createEvent('HTMLEvents');

            spyOn(Mozilla.Menu, 'isSupported').and.returnValue(true);
            spyOn(Mozilla.Menu, 'isWideViewport').and.returnValue(true);

            Mozilla.Menu.init({
                onMenuOpen: options.open,
                onMenuClose: options.close
            });

            mockEnterEvent.initEvent('mouseenter', true, true);
            item.dispatchEvent(mockEnterEvent);
            jasmine.clock().tick(200);

            expect(item.classList.contains('is-selected')).toBeTruthy();
            expect(options.open).toHaveBeenCalled();

            mockLeaveEvent.initEvent('mouseleave', true, true);
            item.dispatchEvent(mockLeaveEvent);
            jasmine.clock().tick(200);

            expect(item.classList.contains('is-selected')).toBeFalsy();
            expect(options.close).toHaveBeenCalled();
        });

        it('should open on click', function() {
            var item = document.querySelector('.mzp-c-menu-category.mzp-has-drop-down');
            var title = document.querySelector('.mzp-c-menu-category.mzp-has-drop-down .mzp-c-menu-title');

            spyOn(Mozilla.Menu, 'isSupported').and.returnValue(true);
            spyOn(Mozilla.Menu, 'isWideViewport').and.returnValue(true);

            Mozilla.Menu.init({
                onMenuOpen: options.open,
                onMenuClose: options.close
            });

            title.click();

            expect(item.classList.contains('is-selected')).toBeTruthy();
            expect(options.open).toHaveBeenCalled();
        });

        it('should close when clicking the panel button', function() {
            var item = document.querySelector('.mzp-c-menu-category.mzp-has-drop-down');
            var mockEnterEvent = document.createEvent('HTMLEvents');

            spyOn(Mozilla.Menu, 'isSupported').and.returnValue(true);
            spyOn(Mozilla.Menu, 'isWideViewport').and.returnValue(true);

            Mozilla.Menu.init({
                onMenuOpen: options.open,
                onMenuClose: options.close,
                onMenuButtonClose: options.buttonClose
            });

            mockEnterEvent.initEvent('mouseenter', true, true);
            item.dispatchEvent(mockEnterEvent);
            jasmine.clock().tick(200);

            expect(item.classList.contains('is-selected')).toBeTruthy();
            expect(options.open).toHaveBeenCalled();

            document.querySelector('.mzp-c-menu-button-close').click();

            expect(item.classList.contains('is-selected')).toBeFalsy();
            expect(options.buttonClose).toHaveBeenCalled();
            expect(options.close).toHaveBeenCalled();
        });
    });

    describe('interactions (mobile)', function() {

        var options = {
            open: function() {},
            close: function() {},
            buttonClose: function() {}
        };

        beforeEach(function() {
            spyOn(options, 'open');
            spyOn(options, 'close');
            spyOn(options, 'buttonClose');
        });

        it('should expand and collapse on click', function() {
            var item = document.querySelector('.mzp-c-menu-category.mzp-has-drop-down');
            var title = document.querySelector('.mzp-c-menu-category.mzp-has-drop-down .mzp-c-menu-title');

            spyOn(Mozilla.Menu, 'isSupported').and.returnValue(true);
            spyOn(Mozilla.Menu, 'isWideViewport').and.returnValue(false);

            Mozilla.Menu.init({
                onMenuOpen: options.open,
                onMenuClose: options.close
            });

            title.click();
            expect(item.classList.contains('is-selected')).toBeTruthy();
            expect(options.open).toHaveBeenCalled();

            title.click();
            expect(item.classList.contains('is-selected')).toBeFalsy();
            expect(options.close).toHaveBeenCalled();
        });
    });
});
