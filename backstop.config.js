/**
 * BackstopJS Configuration for Mozilla Protocol
 *
 * Visual regression testing configuration for all Protocol components.
 *
 * Usage:
 *   npm run visual:reference  - Capture baseline screenshots
 *   npm run visual:test       - Compare against baseline
 *   npm run visual:approve    - Accept current screenshots as new baseline
 *   npm run visual:open       - Open the HTML report
 *
 * Filtering (run a subset of tests):
 *   Use --filter with a regex pattern to test specific components:
 *
 *   npx backstop test --config=backstop.config.js --filter="Button"
 *   npx backstop test --config=backstop.config.js --filter="Card"
 *   npx backstop test --config=backstop.config.js --filter="Split - Default"
 *   npx backstop reference --config=backstop.config.js --filter="Newsletter"
 *
 * Prerequisites:
 *   The Fractal dev server must be running on localhost:3000
 *   Start it with: npm start
 */

const scenarios = require('./backstop-scenarios');

module.exports = {
    id: 'protocol',
    viewports: [
        {
            label: 'mobile',
            width: 360,
            height: 640
        },
        {
            label: 'tablet',
            width: 768,
            height: 1024
        },
        {
            label: 'desktop-sm',
            width: 1024,
            height: 768
        },
        {
            label: 'desktop-md',
            width: 1280,
            height: 800
        },
        {
            label: 'desktop-lg',
            width: 1366,
            height: 768
        },
        {
            label: 'desktop-xl',
            width: 1440,
            height: 900
        },
        {
            label: 'desktop-xxl',
            width: 1536,
            height: 864
        }
    ],
    scenarios: scenarios,
    paths: {
        bitmaps_reference: 'backstop_data/bitmaps_reference',
        bitmaps_test: 'backstop_data/bitmaps_test',
        html_report: 'backstop_data/html_report',
        ci_report: 'backstop_data/ci_report'
    },
    report: ['browser', 'CI'],
    engine: 'puppeteer',
    engineOptions: {
        args: ['--no-sandbox']
    },
    asyncCaptureLimit: 5,
    asyncCompareLimit: 50,
    debug: false,
    debugWindow: false,
    misMatchThreshold: 0.1
};
