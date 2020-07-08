# HEAD

## Bug Fixes

* **css:** Reduce content container min-width to avoid crawlbars (#611)

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
* **js:** Implement sticky scrolling behaviour for navigation component as an opt-in feature (#560).
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
* **css:** Visited link colour in t-dark themes too dark #335

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
