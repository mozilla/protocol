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
