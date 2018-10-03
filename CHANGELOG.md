## Features

* **css:** Add button variants (#224)
* **css:** Revise button states (#224)
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
