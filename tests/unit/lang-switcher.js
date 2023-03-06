import MzpLangSwitcher from '../../assets/js/protocol/lang-switcher.js';

describe('lang-switcher.js', function() {

    describe('switchPath', function () {

        it('should return the same URL with a different language prefix', function () {
            const location = {};
            location.pathname = '/en-US/firefox/new/';
            location.search = '';
            expect(MzpLangSwitcher.switchPath(location, 'de')).toEqual('/de/firefox/new/');

            location.pathname = '/fr/firefox/';
            expect(MzpLangSwitcher.switchPath(location, 'zh-TW')).toEqual('/zh-TW/firefox/');

            location.pathname = '/de/';
            expect(MzpLangSwitcher.switchPath(location, 'fr')).toEqual('/fr/');

            location.pathname = '/kab/about/';
            expect(MzpLangSwitcher.switchPath(location, 'it')).toEqual('/it/about/');

            location.pathname = '/en-US/firefox/new/';
            location.search = '?dude=abide';
            expect(MzpLangSwitcher.switchPath(location, 'de')).toEqual('/de/firefox/new/?dude=abide');
        });

        it('should return false for an invalid lang code', function () {
            const location = {};
            location.pathname = '/abcd/firefox/new/';
            location.search = '';
            expect(MzpLangSwitcher.switchPath(location, 'de')).toBeFalsy();

            location.pathname = '/a/firefox/';
            expect(MzpLangSwitcher.switchPath(location, 'zh-TW')).toBeFalsy();

            location.pathname = '/en-abc/';
            expect(MzpLangSwitcher.switchPath(location, 'fr')).toBeFalsy();
        });
    });

    describe('init', function() {

        beforeEach(function () {
            const langSelect = `
                <form class="mzp-c-language-switcher" method="get" action="#">
                    <label for="mzp-c-language-switcher-select">Language</label>
                    <select id="mzp-c-language-switcher-select" class="mzp-js-language-switcher-select" name="lang">
                        <option value="en-US" selected>English (US)</option>
                        <option value="de">Deutsch</option>
                        <option value="fr">Français</option>
                        <option value="es-ES">Español</option>
                        <option value="ja">日本語</option>
                    </select>
                    <button class="mzp-c-button" type="submit">Go</button>
                </form>
            `;

            document.documentElement.insertAdjacentHTML('beforeend', langSelect);
        });

        afterEach(function () {
            const node = document.querySelector('.mzp-c-language-switcher');
            if (node.parentNode) {
                node.parentNode.removeChild(node);
            }
        });

        function fireChangeEvent(index) {
            const select = document.querySelector('.mzp-js-language-switcher-select');
            const evt = document.createEvent('HTMLEvents');
            evt.initEvent('change', false, true);
            select.selectedIndex = index;
            select.dispatchEvent(evt);
        }

        it('should redirect the page when a change occurs', function () {
            spyOn(MzpLangSwitcher, 'doRedirect');
            MzpLangSwitcher.init();
            fireChangeEvent(1);
            expect(MzpLangSwitcher.doRedirect).toHaveBeenCalled();
        });

        it('should fire a callback when supplied', function () {
            const result = {
                callback: function() {} // eslint-disable-line no-empty-function
            };

            spyOn(result, 'callback');
            MzpLangSwitcher.init(result.callback);
            fireChangeEvent(2);
            expect(result.callback).toHaveBeenCalledWith('en-US', 'fr');
        });
    });
});
