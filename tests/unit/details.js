import MzpDetails from '../../assets/js/protocol/details.js';

describe('details.js', function() {

    beforeEach(function () {
        const details = `
            <div id="test-wrapper">
                <section id="test1-details">
                    <h3 id="test1-heading-1">Heading 1</h3>
                    <p>Paragraph 1</p>
                    <h3 id="test1-heading-2">Heading 2</h3>
                    <p>Paragraph 2</p>
                    <h4 id="test1-sub-heading-1">Sub Heading 1</h4>
                    <p>Paragraph 3</p>
                </section>
                <section id="test2-details">
                    <h3 id="test2-heading-1">Heading 1</h3>
                    <p>Paragraph 1</p>
                    <h3 id="test2-heading-2">Heading 2</h3>
                    <p>Paragraph 2</p>
                    <h4 id="test2-sub-heading-1">Sub Heading 1</h4>
                    <p>Paragraph 3</p>
                </section>
            </div>
        `;

        document.documentElement.insertAdjacentHTML('beforeend', details);
    });

    afterEach(function () {
        const node = document.querySelector('#test-wrapper');
        if (node.parentNode) {
            node.parentNode.removeChild(node);
        }
    });

    describe('init', function () {

        it('has Utils', function() {
            expect(window.MzpUtils.nextUntil).toBeTruthy();
        });

        it('does not initialize if the browser does not support it', function() {
            spyOn(MzpDetails, 'isSupported').and.returnValue(false);
            spyOn(MzpDetails, 'initItem').and.callThrough();

            MzpDetails.init('#test1-details > h3');

            expect(MzpDetails.initItem).not.toHaveBeenCalled();
        });

        it('initializes on the expected elements if the browser supports it', function() {
            spyOn(MzpDetails, 'isSupported').and.returnValue(true);
            spyOn(MzpDetails, 'initItem').and.callThrough();

            MzpDetails.init('#test1-details > h3');
            const test1 = document.getElementById('test1-details');
            const test1sub = document.getElementById('test1-sub-heading-1');
            const test2 = document.getElementById('test2-details');

            expect(MzpDetails.initItem).toHaveBeenCalled();
            expect(test1.classList.contains('is-details')).toBeTruthy();
            expect(test1sub.classList.contains('is-details')).not.toBeTruthy();
            expect(test2.classList.contains('is-details')).not.toBeTruthy();
        });
    });

    describe('initItem', function () {
        it('makes the expected modifications', function() {
            MzpDetails.init('#test1-details > h3');
            const details1 = document.getElementById('test1-details');
            const summary1 = document.getElementById('test1-heading-1');
            const content1 = document.querySelector('#test1-heading-1 + p');

            // correct HTML
            // generates wrapper if necessary and applies id if necessary
            const content2 = document.querySelector('#test1-heading-2 + div');
            expect(content2.id.indexOf('expand-testdetailsh-') === 0).toBeTruthy();
            // adds buttons to headings
            const button1 = document.querySelectorAll('#test1-heading-1 button');
            expect(button1.length === 1).toBeTruthy();
            const button2 = document.querySelectorAll('#test1-heading-2 button');
            expect(button2.length === 1).toBeTruthy();

            // correct classes
            expect(details1.classList.contains('is-details')).toBeTruthy();
            expect(summary1.classList.contains('is-summary')).toBeTruthy();
            expect(content1.classList.contains('is-closed')).toBeTruthy();
            expect(content1.classList.contains('mzp-js-details-wrapper')).toBeTruthy();
            expect(content2.classList.contains('is-closed')).toBeTruthy();
            expect(content2.classList.contains('mzp-js-details-wrapper')).toBeTruthy();

            // correct ARIA attributes
            // button control matches expand ID on both content1 and content2
            expect(button1[0].getAttribute('aria-controls') === content1.id);
            expect(button2[0].getAttribute('aria-controls') === content2.id);
            // expanded is false
            expect(button1[0].getAttribute('aria-expanded') === 'false');
            expect(button2[0].getAttribute('aria-expanded') === 'false');
            // hidden is true
            expect(content1.getAttribute('aria-hidden') === 'true');
            expect(content2.getAttribute('aria-hidden') === 'true');
        });
    });


    describe('open', function () {

        it('opens', function() {
            spyOn(MzpDetails, 'open').and.callThrough();
            // init on everything
            MzpDetails.init('#test-wrapper section > h3');
            const button = document.querySelector('#test2-heading-1 button');
            const content = document.querySelector('#test2-heading-1 + p');
            const contentId = content.id;

            // click on button
            button.click();
            expect(MzpDetails.open).toHaveBeenCalledWith(contentId, {});

            // correct classes
            expect(content.classList.contains('is-closed')).not.toBeTruthy();

            // correct ARIA attributes
            expect(button.getAttribute('aria-expanded') === 'true');
            expect(content.getAttribute('aria-hidden') === 'false');
        });

        it('triggers the callback', function() {
            MzpDetails.init('#test-wrapper section > h3');
            const options = {
                onDetailsOpen: function() {}, // eslint-disable-line no-empty-function
            };
            const content = document.querySelector('#test2-heading-1 + p');
            const contentId = content.id;

            spyOn(options, 'onDetailsOpen');
            MzpDetails.open(contentId, options);
            expect(options.onDetailsOpen).toHaveBeenCalled();
        });
    });

    describe('close', function () {

        it('closes', function() {
            spyOn(MzpDetails, 'close').and.callThrough();
            // init on everything
            MzpDetails.init('#test-wrapper section > h3');
            const button = document.querySelector('#test2-heading-1 button');
            const content = document.querySelector('#test2-heading-1 + p');
            const contentId = content.id;

            // click on button to open
            button.click();
            // click it again to close
            button.click();
            expect(MzpDetails.close).toHaveBeenCalledWith(contentId, {});

            // correct classes
            expect(content.classList.contains('is-closed')).toBeTruthy();

            // correct ARIA attributes
            expect(button.getAttribute('aria-expanded') === 'false');
            expect(content.getAttribute('aria-hidden') === 'true');
        });

        it('triggers the callback', function() {
            MzpDetails.init('#test-wrapper section > h3');
            const options = {
                onDetailsClose: function() {}, // eslint-disable-line no-empty-function
            };
            const content = document.querySelector('#test2-heading-1 + p');
            const contentId = content.id;

            spyOn(options, 'onDetailsClose');
            MzpDetails.close(contentId, options);
            expect(options.onDetailsClose).toHaveBeenCalled();
        });
    });

    describe('toggle', function () {

        it('opens if closed', function() {
            spyOn(MzpDetails, 'open').and.callThrough();
            // init on everything
            MzpDetails.init('#test-wrapper section > h3');
            const content = document.querySelector('#test2-heading-1 + p');
            const contentId = content.id;

            MzpDetails.toggle(contentId, {});
            expect(MzpDetails.open).toHaveBeenCalledWith(contentId, {});
        });

        it('closes if open', function() {
            spyOn(MzpDetails, 'close').and.callThrough();
            // init on everything
            MzpDetails.init('#test-wrapper section > h3');
            const content = document.querySelector('#test2-heading-1 + p');
            const contentId = content.id;

            MzpDetails.open(contentId, {});
            MzpDetails.toggle(contentId, {});
            expect(MzpDetails.close).toHaveBeenCalledWith(contentId, {});
        });
    });

    describe('destroy', function () {

        it('destroys the expected elements', function() {
            spyOn(MzpDetails, 'destroyItem').and.callThrough();
            // init on everything
            MzpDetails.init('#test-wrapper section > h3');
            const test1 = document.getElementById('test1-details');
            const test2 = document.getElementById('test2-details');
            expect(test1.classList.contains('is-details')).toBeTruthy();

            // destroy just the #test1 stuff
            MzpDetails.destroy('#test1-details > h3');
            expect(MzpDetails.destroyItem).toHaveBeenCalled();
            expect(test1.classList.contains('is-details')).not.toBeTruthy();
            expect(test2.classList.contains('is-details')).toBeTruthy();
        });
    });

    describe('destroyItem', function () {
        it('makes the expected modifications', function() {
            MzpDetails.init('#test1-details > h3');
            MzpDetails.destroy('#test1-details > h3');
            const details1 = document.getElementById('test1-details');
            const summary1 = document.getElementById('test1-heading-1');
            const content1 = document.querySelector('#test1-heading-1 + p');
            const content2 = document.querySelector('#test1-heading-2 + div');

            // removes buttons from headings
            const button1 = document.querySelectorAll('#test1-heading-1 button');
            expect(button1.length === 0).toBeTruthy();
            const button2 = document.querySelectorAll('#test1-heading-2 button');
            expect(button2.length === 0).toBeTruthy();

            // removes classes
            expect(details1.classList.contains('is-details')).not.toBeTruthy();
            expect(summary1.classList.contains('is-summary')).not.toBeTruthy();
            expect(content1.classList.contains('is-closed')).not.toBeTruthy();
            expect(content2.classList.contains('is-closed')).not.toBeTruthy();

            // removes ARIA attributes
            expect(content1.getAttribute('aria-hidden') === null);
            expect(content2.getAttribute('aria-hidden') === null);
        });
    });
});
