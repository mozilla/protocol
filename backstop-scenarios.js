/**
 * BackstopJS Scenarios for Mozilla Protocol
 *
 * This file defines all component URLs for visual regression testing.
 * Components are organized by category and include all variants.
 */

const BASE_URL = 'http://localhost:3000/components/preview';

/**
 * Helper to create a scenario object
 * @param {string} label - Descriptive name for the scenario
 * @param {string} path - Component path (e.g., 'button' or 'button--secondary')
 * @param {object} options - Additional scenario options
 */
function createScenario(label, path, options = {}) {
    return {
        label: label,
        url: `${BASE_URL}/${path}`,
        delay: 500,
        misMatchThreshold: 0.1,
        requireSameDimensions: false,
        ...options
    };
}

const scenarios = [
    // =========================================================================
    // BUTTON
    // =========================================================================
    createScenario('Button - Primary', 'button'),
    createScenario('Button - Using Link', 'button--using-link'),
    createScenario('Button - Primary Dark', 'button--primary-dark'),
    createScenario('Button - Secondary', 'button--secondary'),
    createScenario('Button - Secondary Dark', 'button--secondary-dark'),
    createScenario('Button - Product', 'button--product'),
    createScenario('Button - Product Secondary', 'button--product-secondary'),
    createScenario('Button - Product Secondary Dark', 'button--product-secondary-dark'),
    createScenario('Button - Neutral', 'button--neutral'),
    createScenario('Button - Neutral Dark', 'button--neutral-dark'),
    createScenario('Button - Disabled', 'button--disabled'),

    // =========================================================================
    // CARD
    // =========================================================================
    createScenario('Card - Overview', 'card'),
    createScenario('Card - Extra Small', 'card--extra-small'),
    createScenario('Card - Small', 'card--small'),
    createScenario('Card - Medium', 'card--medium'),
    createScenario('Card - Large', 'card--large'),
    createScenario('Card - Dark Theme', 'card--dark-theme'),

    // =========================================================================
    // CTA LINK
    // =========================================================================
    createScenario('CTA Link', 'cta-link'),

    // =========================================================================
    // SPLIT
    // =========================================================================
    createScenario('Split - Default', 'split'),
    createScenario('Split - Reversed', 'split--reversed'),
    createScenario('Split - Narrow Body', 'split--narrow-body'),
    createScenario('Split - Wide Body', 'split--wide-body'),
    createScenario('Split - Background', 'split--background'),
    createScenario('Split - Media Overflow', 'split--media-overflow'),
    createScenario('Split - Constrained Media', 'split--constrained-media'),
    createScenario('Split - Pop-out Media', 'split--pop-out-media'),
    createScenario('Split - Body Alignment', 'split--body-alignment'),
    createScenario('Split - Media Alignment', 'split--media-alignment'),

    // =========================================================================
    // BRANDING
    // =========================================================================
    createScenario('Logo - Default', 'logo'),
    createScenario('Logo - Centered', 'logo--centered'),
    createScenario('Logo - Centered on Mobile', 'logo--centered-on-mobile'),
    createScenario('Wordmark - Default', 'wordmark'),
    createScenario('Wordmark - Centered', 'wordmark--centered'),
    createScenario('Wordmark - Centered on Mobile', 'wordmark--centered-on-mobile'),
    createScenario('Zap', 'zap'),

    // =========================================================================
    // NOTIFICATION BAR
    // =========================================================================
    createScenario('Notification Bar - Default', 'notification-bar'),
    createScenario('Notification Bar - Success', 'notification-bar--success'),
    createScenario('Notification Bar - Warning', 'notification-bar--warning'),
    createScenario('Notification Bar - Error', 'notification-bar--error'),
    createScenario('Notification Bar - Click', 'notification-bar--click'),

    // =========================================================================
    // NEWSLETTER
    // =========================================================================
    createScenario('Newsletter - Default', 'newsletter'),
    createScenario('Newsletter - Errors', 'newsletter--errors'),
    createScenario('Newsletter - Success', 'newsletter--success'),

    // =========================================================================
    // BILLBOARD
    // =========================================================================
    createScenario('Billboard', 'billboard'),

    // =========================================================================
    // CALLOUT
    // =========================================================================
    createScenario('Callout - Default', 'callout'),
    createScenario('Callout - Dark Theme', 'callout--dark-theme'),
    createScenario('Callout - Content Width', 'callout--content-width'),
    createScenario('Callout - Compact', 'callout--compact'),

    // =========================================================================
    // NAVIGATION
    // =========================================================================
    createScenario('Navigation', 'navigation'),
    createScenario('Menu Item', 'menu-item'),

    // =========================================================================
    // DOWNLOAD BUTTON
    // =========================================================================
    createScenario('Download Button - Default', 'download-button'),
    createScenario('Download Button - Secondary', 'download-button--secondary'),

    // =========================================================================
    // SECTION HEADING
    // =========================================================================
    createScenario('Section Heading', 'section-heading'),

    // =========================================================================
    // MENU LIST
    // =========================================================================
    createScenario('Menu List - Default', 'menu-list'),
    createScenario('Menu List - Download', 'menu-list--download'),

    // =========================================================================
    // PICTO
    // =========================================================================
    createScenario('Picto - Default', 'picto'),
    createScenario('Picto - Centered', 'picto--centered'),
    createScenario('Picto - Side', 'picto--side'),

    // =========================================================================
    // STICKY PROMO
    // =========================================================================
    createScenario('Sticky Promo - Default', 'sticky-promo'),
    createScenario('Sticky Promo - Dark Theme', 'sticky-promo--dark-theme'),

    // =========================================================================
    // LAYOUT - CONTENT CONTAINER
    // =========================================================================
    createScenario('Content Container - Default', 'content-container'),
    createScenario('Content Container - Small', 'content-container--small-container'),
    createScenario('Content Container - Medium', 'content-container--medium-container'),
    createScenario('Content Container - Large', 'content-container--large-container'),
    createScenario('Content Container - Extra Large', 'content-container--extra-large-container'),

    // =========================================================================
    // LAYOUT - COLUMNS
    // =========================================================================
    createScenario('Columns - Overview', 'columns'),
    createScenario('Columns - Two', 'columns--two'),
    createScenario('Columns - Three', 'columns--three'),
    createScenario('Columns - Four', 'columns--four'),

    // =========================================================================
    // LAYOUT - CARD LAYOUT
    // =========================================================================
    createScenario('Card Layout - Overview', 'card-layout'),
    createScenario('Card Layout - Half', 'card-layout--half'),
    createScenario('Card Layout - Third', 'card-layout--third'),
    createScenario('Card Layout - Quarter', 'card-layout--quarter'),
    createScenario('Card Layout - Hero', 'card-layout--hero'),

    // =========================================================================
    // LAYOUT - MAIN WITH SIDEBAR
    // =========================================================================
    createScenario('Main with Sidebar - Default', 'main-with-sidebar'),
    createScenario('Main with Sidebar - Right', 'main-with-sidebar--sidebar-right'),
    createScenario('Example Sidebar Menu', 'example-sidebar-menu'),

    // =========================================================================
    // FOOTER
    // =========================================================================
    createScenario('Footer', 'footer'),
    createScenario('Footer Example', 'example-basic'),

    // =========================================================================
    // FORMS - INPUT
    // =========================================================================
    createScenario('Input - Text', 'input'),
    createScenario('Input - Date', 'input--date'),
    createScenario('Input - Email', 'input--email'),
    createScenario('Input - Placeholder', 'input--placeholder'),
    createScenario('Input - Password', 'input--password'),
    createScenario('Input - File', 'input--file'),
    createScenario('Input - Search', 'input--search'),
    createScenario('Input - Disabled', 'input--disabled'),

    // =========================================================================
    // FORMS - SELECT
    // =========================================================================
    createScenario('Select - Default', 'select'),
    createScenario('Select - Disabled', 'select--disabled'),

    // =========================================================================
    // FORMS - OTHER
    // =========================================================================
    createScenario('Form Header', 'form-header'),
    createScenario('Button Container - Default', 'button-container'),
    createScenario('Button Container - End Aligned', 'button-container--end-aligned'),
    createScenario('Button Container - Center Aligned', 'button-container--center-aligned'),
    createScenario('Button Container - Stretched', 'button-container--stretched'),
];

module.exports = scenarios;
