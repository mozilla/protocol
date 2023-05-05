import MzpMenu from '../../assets/js/protocol/menu.js';

describe('menu.js', function() {

    beforeEach(function() {
        const menu = `
            <nav class="mzp-c-menu mzp-is-basic">
                <ul class="mzp-c-menu-category-list">
                <li class="mzp-c-menu-category mzp-has-drop-down mzp-js-expandable">
                    <a class="mzp-c-menu-title" href="#" aria-haspopup="true" aria-controls="mzp-c-menu-panel-example">Firefox</a>
                    <div class="mzp-c-menu-panel mzp-has-card" id="mzp-c-menu-panel-example">
                    <div class="mzp-c-menu-panel-container">
                        <button class="mzp-c-menu-button-close" type="button" aria-controls="mzp-c-menu-panel-example">Close</button>
                        <div class="mzp-c-menu-panel-content"></div>
                    </div>
                    </div>
                </li>
                </ul>
            </nav>
        `;

        document.documentElement.insertAdjacentHTML('beforeend', menu);
    });

    afterEach(function() {
        const node = document.querySelector('.mzp-c-menu');
        if (node.parentNode) {
            node.parentNode.removeChild(node);
        }
    });

    describe('init', function () {

        it('should use JavaScript events when supported', function() {
            spyOn(MzpMenu, 'isSupported').and.returnValue(true);
            spyOn(MzpMenu, 'handleState');

            MzpMenu.init();

            expect(MzpMenu.handleState).toHaveBeenCalled();
            expect(document.querySelector('.mzp-c-menu').classList.contains('mzp-is-enhanced')).toBeTruthy();
        });

        it('should fallback to basic CSS when not supported', function() {
            spyOn(MzpMenu, 'isSupported').and.returnValue(false);
            spyOn(MzpMenu, 'handleState');

            MzpMenu.init();

            expect(MzpMenu.handleState).not.toHaveBeenCalled();
            expect(document.querySelector('.mzp-c-menu').classList.contains('mzp-is-basic')).toBeTruthy();
        });
    });

    describe('interactions (desktop)', function() {

        const options = {
            open: function() {}, // eslint-disable-line no-empty-function
            close: function() {}, // eslint-disable-line no-empty-function
            buttonClose: function() {} // eslint-disable-line no-empty-function
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
            const item = document.querySelector('.mzp-c-menu-category.mzp-has-drop-down');
            const mockEnterEvent = document.createEvent('HTMLEvents');
            const mockLeaveEvent = document.createEvent('HTMLEvents');

            spyOn(MzpMenu, 'isSupported').and.returnValue(true);
            spyOn(MzpMenu, 'isWideViewport').and.returnValue(true);

            MzpMenu.init({
                onMenuOpen: options.open,
                onMenuClose: options.close
            });

            mockEnterEvent.initEvent('mouseenter', true, true);
            item.dispatchEvent(mockEnterEvent);
            jasmine.clock().tick(200);

            expect(item.classList.contains('mzp-is-selected')).toBeTruthy();
            expect(options.open).toHaveBeenCalled();

            mockLeaveEvent.initEvent('mouseleave', true, true);
            item.dispatchEvent(mockLeaveEvent);
            jasmine.clock().tick(200);

            expect(item.classList.contains('mzp-is-selected')).toBeFalsy();
            expect(options.close).toHaveBeenCalled();
        });

        it('should open on click', function() {
            const item = document.querySelector('.mzp-c-menu-category.mzp-has-drop-down');
            const title = document.querySelector('.mzp-c-menu-category.mzp-has-drop-down .mzp-c-menu-title');

            spyOn(MzpMenu, 'isSupported').and.returnValue(true);
            spyOn(MzpMenu, 'isWideViewport').and.returnValue(true);

            MzpMenu.init({
                onMenuOpen: options.open,
                onMenuClose: options.close
            });

            title.click();

            expect(item.classList.contains('mzp-is-selected')).toBeTruthy();
            expect(options.open).toHaveBeenCalled();
        });

        it('should close when clicking the panel button', function() {
            const item = document.querySelector('.mzp-c-menu-category.mzp-has-drop-down');
            const mockEnterEvent = document.createEvent('HTMLEvents');

            spyOn(MzpMenu, 'isSupported').and.returnValue(true);
            spyOn(MzpMenu, 'isWideViewport').and.returnValue(true);

            MzpMenu.init({
                onMenuOpen: options.open,
                onMenuClose: options.close,
                onMenuButtonClose: options.buttonClose
            });

            mockEnterEvent.initEvent('mouseenter', true, true);
            item.dispatchEvent(mockEnterEvent);
            jasmine.clock().tick(200);

            expect(item.classList.contains('mzp-is-selected')).toBeTruthy();
            expect(options.open).toHaveBeenCalled();

            document.querySelector('.mzp-c-menu-button-close').click();

            expect(item.classList.contains('mzp-is-selected')).toBeFalsy();
            expect(options.buttonClose).toHaveBeenCalled();
            expect(options.close).toHaveBeenCalled();
        });
    });

    describe('interactions (mobile)', function() {

        const options = {
            open: function() {}, // eslint-disable-line no-empty-function
            close: function() {}, // eslint-disable-line no-empty-function
            buttonClose: function() {} // eslint-disable-line no-empty-function
        };

        beforeEach(function() {
            spyOn(options, 'open');
            spyOn(options, 'close');
            spyOn(options, 'buttonClose');
        });

        it('should expand and collapse on click', function() {
            const item = document.querySelector('.mzp-c-menu-category.mzp-has-drop-down');
            const title = document.querySelector('.mzp-c-menu-category.mzp-has-drop-down .mzp-c-menu-title');

            spyOn(MzpMenu, 'isSupported').and.returnValue(true);
            spyOn(MzpMenu, 'isWideViewport').and.returnValue(false);

            MzpMenu.init({
                onMenuOpen: options.open,
                onMenuClose: options.close
            });

            title.click();
            expect(item.classList.contains('mzp-is-selected')).toBeTruthy();
            expect(options.open).toHaveBeenCalled();

            title.click();
            expect(item.classList.contains('mzp-is-selected')).toBeFalsy();
            expect(options.close).toHaveBeenCalled();
        });
    });
});
