import MzpNavigation from '../../assets/js/protocol/navigation.js';

describe('navigation.js', function() {

    beforeEach(function () {
        const nav = `
            <div class="mzp-c-navigation">
                <div class="mzp-c-navigation-l-content">
                    <div class="mzp-c-navigation-container">
                        <button class="mzp-c-navigation-menu-button" type="button" aria-controls="map-c-navigation-items">Menu</button>
                        <div class="mzp-c-navigation-logo"><a href="https://www.mozilla.org/">Mozilla</a></div>
                        <div class="mzp-c-navigation-items" id="map-c-navigation-items">
                        <div class="mzp-c-navigation-items-container"></div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        document.documentElement.insertAdjacentHTML('beforeend', nav);

        spyOn(MzpNavigation, 'supportsSticky').and.returnValue(true);
    });

    afterEach(function(){
        const node = document.querySelector('.mzp-c-navigation');
        if (node.parentNode) {
            node.parentNode.removeChild(node);
        }
    });

    describe('interactions', function () {

        it('should open and close as expected', function() {
            const button = document.querySelector('.mzp-c-navigation-menu-button');
            const menu = document.querySelector('.mzp-c-navigation-items');
            const options = {
                open: function() {}, // eslint-disable-line no-empty-function
                close: function() {} // eslint-disable-line no-empty-function
            };

            spyOn(options, 'open');
            spyOn(options, 'close');

            MzpNavigation.init({
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

    describe('sticky behavior', function() {

        it('should not initialize sticky behavior by default', function() {
            spyOn(MzpNavigation, 'initSticky');

            MzpNavigation.init();
            expect(MzpNavigation.initSticky).not.toHaveBeenCalled();
        });

        it('should initialize sticky behavior when specified', function() {
            document.querySelector('.mzp-c-navigation').classList.add('mzp-is-sticky');
            spyOn(MzpNavigation, 'initSticky');

            MzpNavigation.init();
            expect(MzpNavigation.initSticky).toHaveBeenCalled();
        });

        it('should create sticky behavior for large viewports', function() {
            document.querySelector('.mzp-c-navigation').classList.add('mzp-is-sticky');
            spyOn(MzpNavigation, 'isLargeViewport').and.returnValue(true);
            spyOn(MzpNavigation, 'createSticky');
            MzpNavigation.init();
            expect(MzpNavigation.createSticky).toHaveBeenCalled();
        });

        it('should not create sticky behavior for small viewports', function() {
            document.querySelector('.mzp-c-navigation').classList.add('mzp-is-sticky');
            spyOn(MzpNavigation, 'isLargeViewport').and.returnValue(false);
            spyOn(MzpNavigation, 'createSticky');
            MzpNavigation.init();
            expect(MzpNavigation.createSticky).not.toHaveBeenCalled();
        });

        it('should not create sticky behavior for users who prefer reduced motion', function() {
            const nav = document.querySelector('.mzp-c-navigation');
            nav.classList.add('mzp-is-sticky');
            spyOn(window, 'matchMedia').withArgs('(prefers-reduced-motion)').and.returnValue({ matches: true });
            spyOn(MzpNavigation, 'initSticky');
            MzpNavigation.init();
            expect(MzpNavigation.initSticky).not.toHaveBeenCalled();
            expect(nav.classList.contains('mzp-is-sticky')).toBeFalse();
        });
    });
});
