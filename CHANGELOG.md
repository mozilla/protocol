# 21.0.0

## Features

* **assets:** (breaking) Update @mozilla-protocol/assets to 6.0.1
* **css:** Update navigation and footer with Mozilla logo lockup.

## Bug Fixes

* **css:** Notification bar padding of links only working for complete sentences (#1000)
* **css:** Missing explicit `mzp-c-notification-bar-cta` distinction (#1041)
* **css:** Fix logo size in navigation in Firefox variant on large screen

## Migration Tips

* The new Mozilla wordmark files are the same height but longer. If you are explicitly declaring a width for them, you should update it (Tip: check your CSS background images too.)
* The logo files are no longer square, so check their dimensions too (social files remain square)

# 20.0.0

## Features

* **fonts:** (breaking) Adds rebrand fonts, Mozilla Headline and Mozilla Text. Removes outdated Mozilla Brand font, Zilla Slab. New fonts will only support `woff2` format to simplify maintenance.
* **fonts:** Upgrade Inter font to version 4.1, drop WOFF 1.0 format (#1026)
* **css:** Add `text-wrap: balance` to all headings (#910)
* **css:** Apply hover cursor from Details component to Details element (#948)
* **assets:** Update @mozilla-protocol/assets to 5.4.0

## Migration Tips

* **fonts:** Any use of `font-mozilla` mixin should be replaced with `font-mozilla-headline`. NOTE: we recommend `font-mozilla-headline` only for text over 24px (below should be `font-mozilla-text`)
* Headings are now [balanced](https://developer.mozilla.org/docs/Web/CSS/text-wrap-style#balanced_text), which can impact other wrapping rules. Make sure any changes to `h1`–`h6` rendering end up styled as expected, especially if you apply any `white-space`, `word-break` or `hyphens` customizations.
* See notes for [Protocol Assets 5.4.0](https://github.com/mozilla/protocol-assets/blob/main/CHANGELOG.md#540)

# 19.3.0

## Features

* **js:** Migrate tests from Karma to Jasmine browser runner (#899)

## Bug Fixes

* **css:** Form select elements don't match styling when disabled (#885)
* **css:** Modal close button pointer overridden by defaults (#955)

# 19.2.0

## Features

* **component:** Add Firefox Klar wordmark for the Wordmark component (#932)
* **js:** Migrate ESLint to use flat config file (#906)

# 19.1.0

## Features

* **component:** Remove the format option from Newsletter component (#926)
* **component:** Allow an optional icon in buttons (#893)

# 19.0.0

## Features

* **component:** Remove deprecated Picto Card component.
* **component:** Remove deprecated Hero component. (#912)
* **component:** Refactor and rename the Callout component (previously Call-out) (#787)
* **component:** Remove Compact Call-out as a separate component. It's now just a variant of the updated Callout.
* **js:** Update newsletter component to include JS to post directly to Basket (#839).
* **css:** Add CSS utility class for centered text and document existing title utility classes (#897).

## Bug Fixes

* **css:** Fix incorrect value for `text-body-lg` in Firefox theme.
* **js:** Fix typo at `lang-switcher.js` comment
* **css:** Center-align button text (#826)

## Migration Tips

* Rename instances of `mzp-c-call-out` to `mzp-c-callout` (note the removed dash).
* Replace instances of Compact Call-out with the compact variant of Callout (`class="mzp-c-callout mzp-l-compact"`).
* Update references to the `call-out` SCSS file to `callout` in any `@import` or `@use` rules.
  ** e.g. `@use 'components/call-out';` should change to `@use 'components/callout';`
* The rebuilt Callout doesn't feature integrated brand logos. Use Logo and Wordmark components instead.
* The rebuilt Compact Callout lacks an integrated logo, so it no longer positions the logo at one end of the component. A Logo or Wordmark component should appear in the body instead.
* Convert any instances of the Hero component to either Split or Callout.
* Convert any instances of the Picto Card component to Picto.

# 18.0.0

## Features

* **css:** Replace `get-theme`, `type-scale` functions and theme and type-scale maps with CSS Custom Properties. Sass variables added for legacy support
* **css:** Migrates the sass `@import` with `@use` and `@forward` (#755).

## Migration Tips

* This version updates how we internally import SCSS files, from the `@import` syntax to `@use` and `@forward`
* When importing `lib` at the head of your project you will use the `with` keyword instead of
stating variables explicitly, like this:

```scss
@use '/assets/sass/protocol/includes/lib' with ($font-path: '/protocol/fonts');
```

* To use the global namespace for protocol variables you will need to use the `as` keyword and assign to `*`:

```scss
@use '../includes/lib' as *;
```

* if you don't use `as` you would access variables and mixins from the file using the filename as a namespace:

```scss
@use '../includes/lib';

.mzp-c-item {
    @include lib.text-title-md;
    color: lib.$color-ink-80;
    margin: lib.$spacing-lg 0;
}
```

* For more information on the `@use` and `@forward` you can visit the [offical SCSS documentation](https://sass-lang.com/documentation/at-rules) or the usage page on the [Protocol documentation website](https://protocol.mozilla.org/docs/usage/overview.html)

* This version also moves from using the `get-theme` function to using css custom properties. A future version of protocol will depreciate both the `get-theme` and `type-scale` functions.
* To migrate from `get-theme` or `type-scale` to CSS custom properties, follow this pattern:
* From this:

```scss
.mzp-t-dark {
  background-color: get-theme('background-color-inverse');
  color: get-theme('body-text-color-inverse');
  line-height: type-scale('body-line-height');
}
```

* to this:
* (Note: if you need to support legacy browsers, place the CSS custom properties in a `@supports` flag and use sass variables as a fall back. Legacy browsers will always be served the default theme.)

```scss
.mzp-t-dark {
  background-color: $background-color-inverse;
  color: $body-text-color-inverse;
  line-height: $body-line-height;

  @supports (--css: variables) {
    background-color: var(--background-color-inverse);
    color: var(--body-text-color-inverse);
    line-height: var(--body-line-height);
  }
}
```

* For more information on CSS custom properties you can visit [MDN's documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) or the framework page [Protocol's documentation website](https://protocol.mozilla.org/docs/usage/framework.html).

# 17.0.1

## Bug Fixes

* **js:** MzpDetails component should be explicitly initialized (Fixes #879)

# 17.0.0

## Bug Fixes

* **js:** Moves the aria-expanded attribute to the mzp-c-navigation-menu-button (#860).
* **css:** Remove default mobile padding on nospace split component (#875).
* **css:** Removed min-width on the .mzp-c-split-container class on the split component (#843).

## Features

* **js:** Protocol JS components are now written using modern JS and published as ES5/UMD format (#255).
* **js:** Removed pre-minified JS files from the published package (#255).
* **css:** Removed pre-minified CSS files from the published package (#255).

## Bug Fixes

* **js:** Fix syntax error in legacy IE when compiling JS (#861)

# 16.1.0

## Features

* **component:** Add centering classes for Logo and Wordmark. (#718)
* **docs:** Migrate Protocol documentation site to Fractal.
* **node:** Create a Webpack config for compiling docs using Fractal.
* **css:** Updated stylelint rules to match Bedrock's linting pattern. (#814)
* **js** Updated `addListener` method, which is now deprecated, to be replaced by `addEventListener`. `addListener` will be used as a fallback for older browsers.
* **css** Updated focus states for buttons. (#864)
*  **docs:** Added 404 page

## Bug Fixes

* **js:** Ensure focus is moved to modal after animation completes (#829)
* **node:** Make sure to build NPM package using production mode.
* **html:** Added accessible attributes to menu bar (#815).
* **css:** Add style rule for the hidden attribute in global reset (#783).
* **html:** Use unambiguous date format in sidebar.
* **docs:** Remove aria-disabled from disabled form inputs.
* **css:** Update font color for Notification Bar variants to black and error-variant background color to a lighter red for better visual accessibility (#848).

# 16.0.1

## Bug Fixes

* **css:** Fix repeating background on disabled search field (#767)
* **js:** Fix keyboard focus capture on modal open animation (#749).

## Features

* **node:** Create a standalone Webpack config for compiling the Protocol NPM package (#746).
* **js:** Update protocol to extend standard ESLint configs (#753).
* **js:** Move Karma test command to NPM script (#748).

## Bug Fixes

* **js:** use more robust polyfill for `e.matches` (#736)

# 16.0.0

## Features

* **linting:** Updated ESLint and Stylelint, moved to NPM scripts (#745).
* **node:** Bumped Node.js to v16 (#745).

## Features

* **css:** Add tertiary theme colors.
* **css:** (breaking) Rename "alt" theme colors to "secondary."
* **component:** New breadcrumb component.

## Bug Fixes

* **css:** Fix image overlapping content in a reversed Split with media overflow.

## Migration Tips

* Update any uses of the theme variable `background-color-alt` (in the `get-theme()` function) to `background-color-secondary`.
* Update any uses of the theme variable `background-color-alt-inverse` (in the `get-theme()` function) to `background-color-secondary-inverse`.
* Update any uses of the theme variable `body-text-color-alt` (in the `get-theme()` function) to `body-text-color-secondary`.
* Update any uses of the theme variable `body-text-color-alt-inverse` (in the `get-theme()` function) to `body-text-color-secondary-inverse`.
* Update any uses of the `mzp-t-background-alt` class to `mzp-t-background-secondary`.

# 15.1.0

## Features

* **component:** Add Firefox Relay logos and wordmarks
* **assets:** Update @mozilla-protocol/assets to 5.1.0

# 15.0.0

## Features

* **assets:** (breaking) Update @mozilla-protocol/assets to 5.0.0
* **assets:** Refactored logo and wordmark mixins to use SVG assets instead of PNG
* **component:** New responsive video container.

## Bug Fixes

* **js:** when navigation has `mzp-is-sticky` class, respect user preference for reduced motion (#733)
* **css:** Replace deprecated `/` division operator with `math.div()` (#722)
* **css:** Set Split media width to 100% to accommodate responsive video (#711)

## Migration Tips

* This version updates the included assets, removing the PNG versions of logos and wordmarks. If you're relying on those assets via Protocol, you'll need to update or find alternative sources. See notes for [Protocol Assets 5.0.0](https://github.com/mozilla/protocol-assets/blob/main/CHANGELOG.md#500)

# 14.1.0

## Features

* **css:** Add overriding rules to the card component to enable dark mode with `.mzp-t-dark` class. (#714)
* **css:** Add content width classes to Split component.
* **css:** Add default bottom margins to Logo and Wordmark components (#712)
* **css:** Add `.mzp-u-title-3xs` utility class.
* **css:** Add warning when compiling deprecated components (#709)

* Migrate CI to GitHub actions

## Bug Fixes

* **css:** Enhancements/fixes to Split component (#702)
* **css:** Let Picto retain its bottom margin in multi-column layouts in small viewports (#699)
* **css:** Override styling native summary element when it’s polyfilled in IE11 (#658)
* **js:** Set global `Mzp` namespace to default to `window` as root (#687).
* **docs:** Update docs to clarify SCSS variable use (#697)


# 14.0.3

## Bug Fixes

* **assets:** Fix Mozilla logo in footer component.


# 14.0.2

## Features

* **css:** Add `.mzp-t-split-nospace` class to Split component, to remove vertical spacing.
* **css:** Add `.mzp-t-content-nospace` class to content container, to remove vertical spacing.
* **css:** Renamed `_sections.scss` to `_containers.scss` for clarity.

## Bug Fixes

* **css:** Remove bottom margin from the last child of a content container.
* **css:** Remove bottom margin from Feature Card when it's the last child of a content container.
* **css:** Remove bottom margin from Newsletter Form when it's the last child of a content container.
* **css:** Make Picto fill the column width when in multi-column layouts.
* **css:** Remove bottom margins from lists used as multi-column containers.
* **css:** Add vertical grid-gaps to multi-column layouts, for when content wraps to multiple rows.
* **css:** Use theme variables for form colors.
* **assets:** Fix Mozilla logo in navbar component.


# 14.0.1

## Bug fixes

* **css:** Fix import order for themes and functions (#653)

# 14.0.0

## Features

* **css:** Reduce base heading sizes
* **component:** Add Split component (#326)
* **component:** New picto component, deprecating the previous picto card (#382)
* **template:** New multi-column layout container with up to four even columns (#233)
* **css:** Add a theme class for alt background colors
* **css:** Add logo and wordmark components (#665)
* **css:** Add support for mozilla, pocket, and vpn logos to hero and callout components (#663)
* **assets:** (breaking) Update @mozilla-protocol/assets to 4.0.0
* **css:** Add Section Heading component (#664)
* **css:** Add horizontal spacing variables (#345)
* **css:** Add vertical spacing variables (#536)

## Bug Fixes

* **a11y:** Fix link button focus color. (#655)

## Migration Tips

* Default sizes for heading elements (h1–h6) are smaller. Most components declare sizes explicitly but if you're relying on generic sizes for HTML headings you may need to adjust.
* The new spacing variables increase top and bottom padding for `.mzp-l-content` at some breakpoints. If you have custom components which match the padding around Protocol components you may wish to update those components to use the new variables.
* See notes for [Protocol Assets 4.0.0](https://github.com/mozilla/protocol-assets/blob/main/CHANGELOG.md#migration-tips)

# 13.0.1

## Features

* **css:** Update inverted link colors in both Firefox and Mozilla themes.
* **css:** Add a new mixin for explicitly white links, when regular inverse link colors are undesirable (#648)

# 13.0.0

## Features

* **css:** (breaking) Implement brand themes. (#447)
* **css:** Update type scale(s) (#410)
* **component:** Add error message component (#430)

## Bug Fixes

* **js:** Check for sidemenu before initializing (#643)

## Migration Tips

* xxl and xxs font size mixins are renamed to 2xl and 2xs respectively. Replace all instances.
  * `text-title-xxl` changes to `text-title-2xl`
  * `text-title-xxs` changes to `text-title-2xs`
* xxl and xxs title utility classes are renamed to 2xl and 2xs respectively. Replace all instances in HTML (also consider replacing utility classes in HTML with the equivalent mixins in Sass/SCSS).
  * `mzp-u-title-xxl` changes to `mzp-u-title-2xl`
  * `mzp-u-title-xxs` changes to `mzp-u-title-2xs`
* `protocol-extra.scss` is renamed to `protocol-components.scss`
* `base/utilities/_typography.scss` is renamed to `base/utilities/_titles.scss`
* The variables `$font-metropolis`, `$font-zilla-slab`, and `$font-inter` are deprecated in favor of design tokens `$font-stack-firefox`, `$font-stack-mozilla`, and `$font-stack-base` respectively.
  * `$font-metropilis` changes to `$font-stack-firefox`
  * `$font-zilla-slab` changes to `$font-stack-mozilla`
  * `$font-inter` changes to `$font-stack-base`
* `mzp-c-form-heading` and `mzp-c-form-subheading` have been changed to `mzp-c-form-title` and `mzp-c-form-subtitle`.
* Headings/titles now have an explicitly declared text color (not inherited).

# 12.1.1

## Features

* **css:** Revise sticky promo component to be hidden by default  (#638)

# 12.1.0

## Features

* **css:** Add sticky promo component (#603)

# 12.0.1

## Bug Fixes

* **css:** Remove max-width from cards in card-layout (#620)
* **css:** Navigation is max-content width on large screens (#615)
* **css:** Set text-align on image replacement mixin (#618)
* **css:** Reduce content container min-width to avoid crawlbars (#611)
* **css**: Decrease min-width of form fields (Fix #607)

# 12.0.0

## Features

* **css:** (breaking) Document content container and add width theme classes (#505)
* **css:** Add button container and alignment options (#580)
* **css:** Update form spacing and add form layout components (#508)
* **css:** Add form dark theme (#508)
* **css:** Add styled checkboxes and radio buttons (#439)
* **tokens:** update @mozilla-protocol/tokens to 5.0.5
* **css:** Tweak form error styles (#508)
* **css:** (breaking) Add styled text inputs (#430)
* **css:** Button style updates. (#429)
* **css:** Add styled select drop downs (#435)

## Bug Fixes

* **node:** Update gulp-sass to v4.1.0 (#598)
* **css:** Fix relative imports in protocol-extra.scss (#597)
* **css:** Fix bug with new select box and footer language select (#584)
* **css:** Switch to negative text indent for image replacement (#519)
* **css:** Embiggen the modal close button (#557)
* **css:** Center the notification bar in larger viewports
* **css:** Button line-height bug fix
* **css:** Code cleanup in reset.scss & forms.scss

## Migration Tips

* Find and replace `mzp-t-narrow` with `mzp-t-content-md` on content containers (`mzp-l-content`).
* Content width tokens have changed slightly, which could impact page layout. See https://github.com/mozilla/protocol-tokens/pull/81/files
* Styled form inputs now include bottom spacing. If you have added this spacing to your forms in another way (for example, wrapping them in paragraph tags) you could end up with double spacing.
* Find and replace `mzp-t-small` to `mzp-t-md` on buttons.
* The value of `$layout-2xl` has increased.
* The new select box styles include the down arrow as a background image. If you have declared a `background` or `background-image` for selects locally, you should remove it.
* Add `mzp-t-dark` to `<form class="mzp-c-language-switcher">` (or to any other parent element) to get a brighter focus ring on the language select box.

# 11.0.2

## Features

* **css:** Update form label styles (#430)
* **js:** Implement sticky scrolling behavior for navigation component as an opt-in feature (#560).
* **utility:** Add title size utility classes. Rename `text-display-` to `text-title-`, keep `text-display-` as an alias (#297).
* **component:** Updates to emphasis box, with additional documentation and usage guidelines.
* **css:** Notification bar updates; use border-box, fix image replacement bug, add focus styles, tweak spacing (#549).

## Migration Tips

* Add a class of `mzp-is-sticky` to `mzp-c-navigation` to opt-in to sticky navigation.
* Find and replace `text-display-` to `text-title-`.

# 11.0.1

## Bug Fixes

* **css:** Add link color styles to notification bar (#541)
* **css:** Fix notification bar line height breaking container. (#525)

# 11.0.0

## Features

* **tokens:** (breaking) update @mozilla-protocol/tokens to 5.0.3
* **assets:** update @mozilla-protocol/assets to 3.0.1
* **js:** Support a CTA link in NotificationBar (#460)

## Bug Fixes

* **css:** Changes '.mzp-c-button-download-container' display property to 'inline-block' from 'block' (#486)

## Migration Tips
  * Use tokens for border radius (rounded corners): `$border-radius-xs`, `$border-radius-sm`, `$border-radius-md`, `$border-radius-lg`
  * Use tokens for box shadows: `$box-shadow-sm`, `$box-shadow-md`, `$box-shadow-lg`
  * `$color-off-black` is now `$color-ink-80`
  * The gray palette is greatly expanded. Old gray colors map closely to the new "marketing gray" palette. For example, `$color-gray-30` is now `$color-marketing-gray-30`
  * `$screen-lg` breakpoint is now 1024px. This shouldn't impact layout because this token should only be used in media queries (use the `$content-*` tokens for layout)
  * Mozilla brand colors are namespaced as `$color-moz-*`. Avoid mixing Mozilla colors with Firefox colors.


# 10.0.1

## Bug Fixes

* **css:** Fix zap import (#520)

# 10.0.0

* **css:** Prism styles consume Protocol Tokens (#452)
* **css:** Add Firefox variant of navigation (#483)
* **css:** Menu List Firefox theme CTA uses firefox-font #503
* **css:** Enlarge Footer UI icons (#495)
* **css:** Add Zap component (#511)
* **css:** (breaking) Rename `mzp-c-box-emphasis` to `mzp-c-emphasis-box` (#489)
* **assets:** Update @mozilla-protocol/assets to 3.0.1 (#509)
* **css:** CTA links now use text underlines instead of borders (#490)

# 9.0.1

## Bug Fixes

* **js:** Use window.Mzp in Modal and Notification components (#488)

# 9.0.0

* **assets:** (breaking) Update @mozilla-protocol/assets to 3.0.0 (#479)

## Migration Tips
  * Browser logo is for Firefox 70+
  * Browser logos have new names and directories
    * e.g. `logos/firefox/firefox.png` → `logos/firefox/browser/logo-lg.png`
    * Logos are also slightly larger, check height & width are declared
  * UI icons have moved up a directory `/icons/ui/` → `/icons/`
  * Remove `-black` from file names for black icons
  * Focus theme has been removed

# 8.1.0

* **docs:** Added component issue templates (#379)
* **css:** Bold menu titles (#481)
* **css:** Add Menu List component (#474)
* **css:** Added Emphasis box (#385)
* **css:** Fx theme CTAs should use the Metropolis Font (#468)
* **css:** Separate newsletter form and newsletter layout styling (#444)
* **css:** Add inline list component (#465)

# 8.0.0

## Features

* **css:** Adds a narrow content channel (#469)
* **css:** Add Notification bar component (#383)
* **css:** Details button gets cursor:pointer when hovered (#367)
* **css:** (breaking) Add Metropolis as Firefox brand font (#386)

## Bug Fixes

* **css:** Article max-width restricted to size of parent container (#422)
* **css:** Increase contrast on sidebar mobile menu (#407)
* **css:** Remove double underline from CTA links in dark theme (#374)

# 7.0.2

## Bug Fixes

* **js:** Newsletter.js only runs when there is a newsletter (#400)

# 7.0.1

* **css:** Text display mixin consistency (#389)
* **css:** Add citation to blockquote and decrease font size (#366)

# 7.0.0

# Features

* **css:** Update product button theme color (#380)
* **css:** (breaking) Implement Updated Font Stacks (#342)

# 6.0.1

# Bug Fixes

* **css:** Error in at2x mixin #368

# 6.0.0

# Bug Fixes

* **css:** Update at2x to allow background-size: contain (#336)
* **css:** (breaking) Remove curve under hero component (#311)
* **css:** (breaking) Move Zilla Slab from default theme to custom theme (#342)
* **css:** Call Out component is missing display: flex vendor prefixes (#218)
* **css:** Decrease size of article h3 and h4s #293
* **css:** (breaking) Update protocol/tokens v3.0.0
* **css:** blockquote needs mzp-t-firefox theme #303
* **css:** Summary button text over laps icon #331
* **css:** Make summary and details widget styles into mixins #332
* **css:** Visited link color in t-dark themes too dark #335

# 5.0.0

## Features

* **css:** Add optional label to navigation mobile menu button (#313)
* **docs:** Add example menu to menu molecule page (#322)
* **css:** Define basic styles for dl lists (#295)
* **css:** Add basic styles for hr elements (#296)
* **js:** Update ESLint to consume @mozilla-protocol/eslint-config (##85)
* **css:** (breaking) Rename download button theme to product button theme (#273)
* **css:** Navigation items that are links without menus get hover styles (#304)
* **css:** Let menu item titles not be links (#307)
* **gulp:** Update to Gulp 4.0 (#285)
* **css:** Convert CTA links to blue (#280)

## Bug Fixes

* **js:** Enable second navigation menu on pages (#300)
* **css:** Use `mzp` namespace for menu and navigation state classes (#324)
* **js:** (breaking) Make the Menu molecule more resilient to JS errors (#320)
* **css:** Social icon backgrounds no longer repeat (#317)
* **css:** Fix billboard overflowing text in IE 10 (#276)

# 4.0.0

## Features

* **js:** Add details component and demo (#129)
* **css:** Add footer component and demo (#184)

## Bug Fixes

* **js:** Add missing del dependency in build (#271).
* **css:** Update tokens (mozilla/protocol-tokens#27)

# 3.1.0

## Features

* **css:** Update Language Selector to include optional link to language selection page (#259)

## Bug Fixes

* **css:** Fix Side Menu RTL styles (#204).
* **css:** Fix card molecule icon alignment for RTL (#203)
* **css:** Remove autoprefixer to ensure consistency using pre-compiled CSS (#119).
* **css:** Fix download button positioning in call out component (#268)

# 3.0.1

## Bug Fixes

* **css:** Primary buttons should use a solid background color on hover (#264)

# 3.0.0

## Features

* **css:** Add button variants (#224)
* **css:** Revise button states (#224)

## Bug Fixes

* **js:** Update JS namespace from Mozilla to Mzp (#253)
* **js:** Rename '.mzp-c-language-switcher-select' class (#242)

# 2.4.3

## Features

* **docs:** Document deployment process (#171)

## Bug Fixes

* **js:** Fixed menu component focusout bug (#247)

# 2.4.2

* **css:** Add blockquote component (#234)

# 2.3.2

## Features

* **docs:** Add page that lists all tokens and their values (#177)

## Bug Fixes

* **js:** Workaround for IE9 navigation bug in bedrock's classList polyfill (#182)
* **css:** Navigation & Menu style fixes (#182)
* **css:** Fix card layout issues at medium viewport sizes (#227)
* **css:** Add font-smoothing properties for macOS devices

# 2.3.1

## Bug Fixes

* **css:** Include Navigation in core bundle and not extras (#182)

# 2.3.0

## Features

* **css:** Add Navigation organism and Menu molecule (#182)

## Bug Fixes

* **npm:** Ensure `npm test` always updates dependencies before running `gulp build` (#191)

# 2.2.0

## Bug Fixes

* **css:**  Billboard alignment broken in Safari (#207)

# 2.1.2

## Features

* **docs:** Add inline CTA to card (#197)
* **docs:** Add bidi control to component previews (#150)

# 2.1.1

## Bug Fixes

* **css:** Avoid referencing URLs in feature queries

# 2.1.0

## Features

* **css:** Add feature card component (#159)
* **css:** Add a page hero component (#157, #158)

## Bug Fixes

* **css:** Billboard text overflows container with long strings (#180)

# 2.0.1

## Bug Fixes

* **scss:** Include @mozilla-protocol/tokens source files in build (#172)

# 2.0.0

## Features

* **css:** Add page footer organism and language switcher component (#149)
* **css:** Add Picto Card component (#154, #155)
* **css:** Add Call Out component (#153)
* **css:** Update button styles (#167)
* **css:** Add custom .mzp-t-firefox global theme class (#169)
* **docs:** Update colors page to consume token data (#161)
* **scss:** Consume @mozilla-protocol/tokens package (#109)

## Bug Fixes

* **docs:** Update card layout demo title to "6 Card Layout" (#164)
* **html:** Remove image link from the billboard molecule (#143)
* **css:** Improve web font loading using font-display descriptor (#147)
* **css:** Media content should occupy 100% modal width (#132)

# 1.0.1

## Bug Fixes

* **css:** Remove redundant .mzp-c-card-small-cta styles (#136)
* **css:** Adjust default margins for billboard components (#138)

# 1.0.0

## Features

* **css:** Compile protocol-extra.css bundle (#120)
* **css:** Add modal organism (#118)
* **css:** Add newsletter form and basic button (#112)
* **docs:** Update home page (#113)
* **css:** Add mozilla-protocol/assets package (#111)
* **css:** Add billboard component (#105)
* **css:** Add basic form elements (#104)
* **css:** Add card molecule (#103)
* **css:** Revise type scale, rename sizes (#102)
* **css:** Add article and sidebar menu organisms and main/sidebar template (#86)
* **css:** Clean up stubs, placeholders and Pebbles legacy bits (#81)
* **css:** Add general link styles (#47)
* **css:** Import the Color design tokens npm package (#48)
* **css:** Add design tokens scss files to the protocol package (#48)

## Bug Fixes

* **gulp:** Stop concatenating Protocol JS modules (#115)
* **gulp:** Remove dependency on gulp-util and cloudfour/gulp-tasks (#100)

# 0.1.2

## Bug Fixes

* **css:** Use relative paths in pre-compiled CSS (#66)

# 0.1.1

## Bug Fixes

* **css:** Images and fonts are 404 when imported via NPM (#49, #50)

## Features

* **scss:** Allow for custom media paths in SCSS (#53)

# 0.1.0

## Features

* **gulp:** Refactored gulp to process assets for publishing to NPM.
* **gulp:** Both JS and CSS is now linted as part of the build process.
* **gulp:** Refactored gulp to include new processes and separate in to folders.
* **scss:** Added CSS mapping for inspecting SCSS files.
* **css:** Concatenated, minified, and formatted CSS for eventual exporting.
* **js:** Concatenated, minified, and formatted CSS for eventual exporting.
