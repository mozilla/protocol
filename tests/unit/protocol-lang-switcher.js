/* global describe, beforeEach, afterEach, it, expect, spyOn */

describe('protocol-lang-switcher.js', function() {

    'use strict';

    describe('switchPath', function () {

        it('should return the same URL with a different language prefix', function () {
            var location = {};
            location.pathname = '/en-US/firefox/new/';
            location.search = '';
            expect(Mzp.LangSwitcher.switchPath(location, 'de')).toEqual('/de/firefox/new/');

            location.pathname = '/fr/firefox/';
            expect(Mzp.LangSwitcher.switchPath(location, 'zh-TW')).toEqual('/zh-TW/firefox/');

            location.pathname = '/de/';
            expect(Mzp.LangSwitcher.switchPath(location, 'fr')).toEqual('/fr/');

            location.pathname = '/kab/about/';
            expect(Mzp.LangSwitcher.switchPath(location, 'it')).toEqual('/it/about/');

            location.pathname = '/en-US/firefox/new/';
            location.search = '?dude=abide';
            expect(Mzp.LangSwitcher.switchPath(location, 'de')).toEqual('/de/firefox/new/?dude=abide');
        });

        it('should return false for an invalid lang code', function () {
            var location = {};
            location.pathname = '/abcd/firefox/new/';
            location.search = '';
            expect(Mzp.LangSwitcher.switchPath(location, 'de')).toBeFalsy();

            location.pathname = '/a/firefox/';
            expect(Mzp.LangSwitcher.switchPath(location, 'zh-TW')).toBeFalsy();

            location.pathname = '/en-abc/';
            expect(Mzp.LangSwitcher.switchPath(location, 'fr')).toBeFalsy();
        });
    });

    describe('init', function() {

        beforeEach(function () {
            var langSelect = '<form class="mzp-c-language-switcher" method="get" action="#">' +
                                '<label for="mzp-c-language-switcher-select">Language</label>' +
                                '<select id="mzp-c-language-switcher-select" class="mzp-js-language-switcher-select" name="lang">' +
                                    '<option value="en-US" selected>English (US)</option>' +
                                    '<option value="de">Deutsch</option>' +
                                    '<option value="fr">Français</option>' +
                                    '<option value="es-ES">Español</option>' +
                                    '<option value="ja">日本語</option>' +
                                '</select>' +
                                '<button class="mzp-c-button" type="submit">Go</button>' +
                            '</form>';
            document.documentElement.insertAdjacentHTML('beforeend', langSelect);
        });

        afterEach(function(){
            var node = document.querySelector('.mzp-c-language-switcher');
            if (node.parentNode) {
                node.parentNode.removeChild(node);
            }
        });

        function fireChangeEvent(index) {
            var select = document.querySelector('.mzp-js-language-switcher-select');
            var evt = document.createEvent('HTMLEvents');
            evt.initEvent('change', false, true);
            select.selectedIndex = index;
            select.dispatchEvent(evt);
        }

        it('should redirect the page when a change occurs', function () {
            spyOn(Mzp.LangSwitcher, 'doRedirect');
            Mzp.LangSwitcher.init();
            fireChangeEvent(1);
            expect(Mzp.LangSwitcher.doRedirect).toHaveBeenCalled();
        });

        it('should fire a callback when supplied', function () {
            var result = {
                callback: function() {} // eslint-disable-line no-empty-function
            };

            spyOn(result, 'callback');
            Mzp.LangSwitcher.init(result.callback);
            fireChangeEvent(2);
            expect(result.callback).toHaveBeenCalledWith('en-US', 'fr');
        });
    });
});
