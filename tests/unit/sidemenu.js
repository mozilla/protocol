import MzpSideMenu from '../../assets/js/protocol/sidemenu.js';

describe('sidemenu.js', function() {

    beforeEach(function () {
        const sidemenu = `
            <nav class="mzp-c-sidemenu">
                <section class="mzp-c-sidemenu-summary mzp-js-toggle" aria-controls="sidebar-menu">
                    <h3 class="mzp-c-sidemenu-label">Menu label</h3>
                    <ul>
                        <li>Menu title</li>
                        <li class="mzp-is-current">Menu item one</li>
                    </ul>
                </section>

                <section class="mzp-c-sidemenu-main" id="sidebar-menu">
                    <h4 class="mzp-c-sidemenu-heading"><a href="#">Menu title</a></h4>
                    <ul>
                        <li class="mzp-is-current"><a href="#">Menu item one</a></li>
                        <li><a href="#">Menu item two</a></li>
                    </ul>
                </section>
            </nav>
        `;

        document.documentElement.insertAdjacentHTML('beforeend', sidemenu);
    });

    afterEach(function(){
        const node = document.querySelector('.mzp-c-sidemenu');
        if (node && node.parentNode) {
            node.parentNode.removeChild(node);
        }
    });

    describe('aria states', function () {

        it('should declare aria-expanded on the toggle, not on the menu content', function() {
            const toggle = document.querySelector('.mzp-js-toggle');
            const menu = document.querySelector('.mzp-c-sidemenu-main');

            MzpSideMenu.init();

            expect(menu.hasAttribute('aria-expanded')).toBeFalse();
            expect(toggle.getAttribute('aria-expanded')).toBe('false');
        });

        it('should keep aria-controls pointing at the menu content', function() {
            const toggle = document.querySelector('.mzp-js-toggle');
            const menu = document.querySelector('.mzp-c-sidemenu-main');

            MzpSideMenu.init();

            expect(toggle.getAttribute('aria-controls')).toBe(menu.id);
        });

        it('should update aria-expanded on the toggle when the menu is opened and closed', function() {
            const toggle = document.querySelector('.mzp-js-toggle');

            MzpSideMenu.init();

            toggle.click();
            expect(toggle.getAttribute('aria-expanded')).toBe('true');

            toggle.click();
            expect(toggle.getAttribute('aria-expanded')).toBe('false');
        });

        it('should not report an already expanded menu as collapsed', function() {
            const nav = document.querySelector('.mzp-c-sidemenu');
            const toggle = document.querySelector('.mzp-js-toggle');
            const menu = document.querySelector('.mzp-c-sidemenu-main');

            nav.classList.add('mzp-is-active');

            MzpSideMenu.init();

            expect(toggle.getAttribute('aria-expanded')).toBe('true');
            expect(menu.hasAttribute('aria-expanded')).toBeFalse();
        });
    });

    describe('interactions', function () {

        it('should open and close as expected', function() {
            const nav = document.querySelector('.mzp-c-sidemenu');
            const toggle = document.querySelector('.mzp-js-toggle');

            MzpSideMenu.init();

            toggle.click();
            expect(nav.classList.contains('mzp-is-active')).toBeTrue();

            toggle.click();
            expect(nav.classList.contains('mzp-is-active')).toBeFalse();
        });

        it('should keep the toggle focusable and exposed as a button', function() {
            const toggle = document.querySelector('.mzp-js-toggle');

            MzpSideMenu.init();

            expect(toggle.getAttribute('role')).toBe('button');
            expect(toggle.getAttribute('tabindex')).toBe('0');
        });

        it('should do nothing when there is no side menu', function() {
            document.querySelector('.mzp-c-sidemenu').remove();

            expect(() => {
                MzpSideMenu.init();
            }).not.toThrow();
        });
    });
});
