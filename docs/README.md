[gulp]: http://gulpjs.com
[handlebars]: http://handlebarsjs.com
[handlebars-layouts]: https://github.com/shannonmoeller/handlebars-layouts
[drizzle]: https://github.com/cloudfour/drizzle
[front-matter]: https://github.com/jxson/front-matter
[marked]: https://github.com/chjj/marked
[git-tag]: https://git-scm.com/book/en/v2/Git-Basics-Tagging
[semver]: https://semver.org/
[demo-default]: https://protocol.mozilla.org/patterns/organisms/article.html
[demo-collection]: https://protocol.mozilla.org/patterns/atoms/typographic.html
[demo-blank]: https://protocol.mozilla.org/demos/type-scale.html
[package.json]: https://github.com/mozilla/protocol/blob/master/src/assets/package/package.json
[releases]: https://github.com/mozilla/protocol/releases/latest
[readme]: https://github.com/mozilla/protocol/blob/master/src/assets/package/README.md
[changelog]: https://github.com/mozilla/protocol/blob/master/CHANGELOG.md

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
### Contents

- [Project Structure](#project-structure)
  - [Patterns](#patterns)
  - [Pages](#pages)
  - [Data](#data)
  - [Front-matter](#front-matter)
  - [Templates](#templates)
  - [Helpers](#helpers)
  - [Stylesheets](#stylesheets)
  - [JavaScript](#javascript)
- [Build Process](#build-process)
- [Running tests](#running-tests)
- [Publishing to NPM](#publishing-to-npm)
- [Deployment](#deployment)
  - [Pushing to production](#pushing-to-production)
  - [Pushing to demo](#pushing-to-demo)
- [Acknowledgements](#acknowledgements)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Project Structure

The default Protocol directory structure looks something like this:

```
protocol
├── dist
├── docs
├── gulp
│   ├── tasks
│   ├── utils
│   ├── config.js
├── src
│   ├── assets
│   ├── data
│   ├── pages
│   ├── patterns
│   ├── static
│   └── templates
└── gulpfile.js
```

| File | Description
| ---  | ---
| **dist** | Where Protocol builds are output
| **src/assets** | Where Protocol source files live
| **src/data** | Where shared [template data](#data) files live
| **src/pages** | Where [Page](#pages) content and templates live
| **src/patterns** | Where [Pattern](#patterns) templates live
| **src/static** | Where generic root assets live
| **src/templates** | Where [Page Layout](#layouts) and Protocol UI templates live
| **gulp/config.js** | The [Gulp task](#build-process) configuration module
| **gulp/tasks** | Individual Gulp task files
| **gulp/utils** | Common Gulp task utility files and helpers
| **gulpfile.js** | The Gulp task initialization script

## Patterns

A Pattern is a grouping of markup templates representing a distinct interface element. Patterns are probably the most substantial and relevant part of the Protocol design system.

The default project structure is as follows:

```
src/patterns
├── atoms
├── molecules
├── organisms
└── templates
```

### Collections

A Pattern _Collection_ is any folder within **src/patterns** that is the parent to one or more template files. The files can be named anything with a **.hbs** or **.html** extension, and will be concatenated into a single file during the build process.

Example input:

```
src/patterns/molecules
├── card
    ├── extra-small-card.hbs
    ├── large-card.hbs
    ├── medium-card.hbs
    └── small-card.hbs
```

Example output:

```
dist/patterns/molecules
└── card.html
```

### Variations

It's common for patterns to consist of multiple variations of the same general piece of markup. For example, the pattern collection for a button component could be structured as:

```
src/patterns/atoms/buttons
├── basic.hbs
|── primary.hbs
└── secondary.hbs
```

These pattern variations are accessible from other templates as partials:

```hbs
{{> patterns.components.button.basic}}
```

And for more complex cases, the **{{#extend}}** and **{{#embed}}** helpers can be used:

```hbs
{{#embed "patterns.components.button.basic"}}
  ...
{{/embed}}
```

## Pages

Pages can be used to present [Patterns](#patterns), or to supplement them with examples or additional documentation. They can be authored as [Markdown][marked], [Handlebars][handlebars], or standard HTML.

Example input:

```
src/pages
├── demos
│   ├── article.hbs
│   ├── card-layout.hbs
│   └── index.hbs
├── docs
│   └── index.hbs
├── fundamentals
│   ├── color.hbs
│   └── typography.hbs
└── index.hbs
```

Example output:

```
dist
├── demos
│   ├── article.html
│   ├── card-layout.html
│   └── index.html
├── docs
│   └── index.html
├── fundamentals
│   ├── color.html
│   └── typography.html
└── index.html
```

By default, Pages will include the surrounding Protocol UI elements in their layout:

To use a different [layout template](#layouts), you can assign one in the Page [front-matter](#front-matter):

```yaml
title: Demo Page
layout: blank
```

_Refer to the [Layouts](#layouts) section for more information on the default layout templates._

## Data

To share common data across all [Page](#pages) and [Pattern](#patterns) templates, you can define data files in JSON or YAML format.

Common data files are include:

```
src/data
├── articles.yaml
├── colors.yaml
├── items.yaml
├── project.yaml
└── specimens.yaml
```

Accessing values from these files can be done with the `{{data}}` template helper. For example:

```yaml
# src/data/team.yaml
- name: Pete
  photo: pete.jpg
- name: Paul
  photo: paul.jpg
- name: Mary
  photo: mary.jpg
```

```hbs
{{! src/pages/team.hbs !}}
{{#each (data "team")}}
  <img src="{{photo}}" alt="{{name}}">
{{/each}}
```

Results in:

```html
<!-- dist/team.html -->
<img src="pete.jpg" alt="Pete">
<img src="paul.jpg" alt="Paul">
<img src="mary.jpg" alt="Mary">
```

## Front-matter

[Patterns](#patterns) and [Pages](#pages) can leverage [YAML front-matter][front-matter] for local template data:

```
---
name: Basic Button
notes: This is _just_ a **basic** button.
---

<button class="mzp-c-button">
  {{name}}
</button>
```

These values can be accessed directly within their own template (e.g. `{{name}}`). From outside templates, the values can be accessed via the `data` property:

```hbs
{{#with (page "colors")}}
  {{data.title}}
{{/with}}
```

Front-matter can also be applied to [Pattern Collections](#collections) by using a **collection.yaml** file at the root of the directory:

```
src/patterns/atoms/buttons
├── collection.yaml
├── basic.hbs
└── download.hbs
```

### Special Properties

While any arbitrary data can be added and referenced, there are some special property definitions that affect how things are displayed:

| Property       | Type    | Description
| ---            | ---     | ---
| **name**       | string  | Override the default name for Patterns and Collections. Example:&nbsp;`name: My Page`
| **order**      | number |  Override the default sort position for Patterns and Collections. Example:&nbsp;`order: 1`
| **hidden**     | boolean | Hide a Pattern variation from listings.
| **notes**      | string  | Annotate details about a Pattern variation with [Markdown][marked] formatting.
| **links**      | object  | Provide a menu of additional documentation links for a Pattern.
| **sourceless** | boolean | Prevent the HTML source of a Pattern from being displayed.
| **hideembed** | boolean | Prevent the HTML source and preview of a Pattern from being displayed.
| **layout**     | string  | Associate a [Layout](#layouts) template to be used for wrapping Page content. Example:&nbsp;`layout: blank`

## Templates

Templates in the **src/templates** directory are intended for the surrounding Protocol docs UI.

```
src/templates
├── drizzle
├── blank.hbs
├── collection.hbs
└── default.hbs
```

The templates in this directory differ from [Patterns](#patterns) and [Pages](#pages) in a few ways:

- They are for _presenting_ content (opposed to _being_ content).
- They do not utilize [front-matter][front-matter] data.
- They cannot be iterated over in any way.

### Layouts

Files at the top-level of the templates directory are assumed to be layout templates for [Pages](#pages):

| Layout             | Description
| ---                | ---
| **default.hbs**    | This is for standard pages that do require the presence of the Protocol docs UI. [Example][demo-default]
| **blank.hbs**      | This is used for special standalone pages that don't require the presence of the Protocol docs UI. [Example][demo-blank]
| **collection.hbs** | This is used for concatenating Pattern collections into a single page. [Example][demo-collection]

### Partials

Files deeper than the top-level of the templates directory are intended to be used as partials for the Protcol docs UI:

```
src/templates/drizzle
├── item.hbs
├── labelheader.hbs
├── nav.hbs
└── swatch.hbs
```

## Helpers

A handful of helpers are included by default to assist with looking up and listing [Data](#data), [Pages](#pages), and [Patterns](#patterns).

**{{data}}** provides access to [Data](#data):

```hbs
{{#with (data "articles/3")}}
  {{title}} by {{author}}
{{/with}}
```

**{{pages}}** provides access to [Page](#pages) listings:

```hbs
<ul>
  {{#each (pages "portfolio" sortby="date")}}
    <li>
      <a href="{{url}}">{{data.title}}</a>
    </li>
  {{/each}}
</ul>
```

**{{collections}}** provides access to [Pattern collection](#patterncollections) listings:

```hbs
<ul>
  {{#each (collections "components" sortby="order")}}
    <li>
      <a href="{{url}}">{{name}}</a>
    </li>
  {{/each}}
</ul>
```

**{{#extend}}**, **{{#embed}}**, **{{#block}}** and **{{#content}}**:

The [handlebars-layouts][handlebars-layouts] helper suite is included to provide extensible "layout" behavior to all templates:

```hbs
{{! src/templates/foo.hbs }}
<html>
  <body>
    {{#block "main"}}
      Default content
    {{/block}}
  </body>
</html>
```

```hbs
{{#embed "foo"}}
  {{#content "main"}}
    Final content
  {{/content}}
{{/embed}}
```

```html
<html>
  <body>
    Final content
  </body>
</html>
```

Pattern templates can also benefit from these helpers:

```hbs
{{! src/patterns/components/button/base.hbs }}
<button class="mzp-c-button {{class}}">
  {{#block "content"}}
    Base Button
  {{/block}}
</button>
```

```hbs
{{! src/patterns/components/button/primary.hbs }}
{{#embed "components.button.base" class="mzp-t-dark"}}
  {{#content "content"}}
    Primary Button
  {{/content}}
{{/embed}}
```

```html
<button class="mzp-c-button mzp-t-dark">
  Primary Button
</button>
```

## Stylesheets

Protocol CSS files are compiled from Sass source files. Both source files and compiled CSS files are included in the output `dist` directory for convenience.

Example input:

```
assets/sass
├── demos
│   ├── article.scss
│   ├── card.scss
│   └── newsletter.scss
├── docs
│   └── site.scss
├── protocol
│   ├── base
│   ├── components
│   ├── includes
│   ├── templates
│   └── protocol.scss
```

Example output:

```
dist/assets
├── docs
|   |── css
|      |── article.css
|      |── article.scss
|      |── card.css
|      |── card.scss
|      |── newsletter.css
|      |── newsletter.scss
|      |── site.css
|      └── site.scss
├── protocol
|   |── protocol
|      |── css
│         ├── base
│         ├── components
│         ├── includes
│         ├── templates
│         ├── protocol.css
│         └── protocol.scss
```

**Note:** that both `demos` and `docs` source files are copied to the same directory for use in the docs site.

## JavaScript

JavaScript files are also processed using a similar structure.

Example input:

```
src/assets/js
├── docs
│   ├── vendor
│   └── global.js
├── protocol
│   ├── protocol-base.js
│   └── protocol-sidemenu.js
```

Example output:

```
dist/assets
├── docs
|   |── js
|      |── vendor
|      └── global.js
├── protocol
|   |── protocol
|      |── js
│         ├── protocol-base.js
│         └── protocol-sidemenu.js
```

# Build Process

The build sequence consists of a small set of [Gulp][gulp] tasks. While you'll probably only need `gulp` and `gulp --dev` most of the time, the other tasks can be called independently to process only a subset of your source files:

| Task         | Description
| ---          | ---
| `gulp`       | Build everything and start the development server.
| `gulp --dev` | Do everything `gulp` does, but with file watching.
| `gulp build` | Just build everything.

# Running tests

To start the build process and then run front-end JS tests against the processed files:

```
npm test
```

# Publishing to NPM

Protocol is published to NPM under the `@mozilla-protocol/core` namespace/package name. To publish a release to NPM, use the following steps:

1. Before you start make sure the project's [CHANGELOG.md][changelog] is up to date.
2. Update the package `version` number in [src/assets/package/package.json][package.json] (use [Semantic Versioning][semver] to determine what the new version number should be).
3. Update the package README [assets/package/README.md][readme].
4. Run `npm install` to update the package-lock.json file.
5. Submit a pull request with your changes (or commit directly to `master` if you have permission). Once the changes have been merged to master:
6. Tag a new release. You can do this either using [Git tag][git-tag], or directly on the [GitHub website][releases].
7. Run `npm test` to run the build script and front-end tests. The package contents will be located in `./dist/assets/protocol/`.
8. If the build is successful and all tests pass, publish to NPM using `npm publish ./dist/assets/protocol/`.

# Deployment

Note: the following instructions assume the mozilla reporitory is the remote called `origin`.

## Pushing to production

Each time an updated package is published to NPM, https://protocol.mozilla.org/ should also be updated so the documentation site matches the NPM package features.

1. Verify all is good on the [staging site](https://protocol-stage.moz.works/).
2. Make sure your local `master` branch is up to date
3. Push the `master` branch to the `prod` branch: `git push origin master:prod`.

A notice will be posted in #www-notify on Slack when the push has completed.

## Pushing to demo

For previewing new components before they are merged to `master`, two demo instances are available.

1. Push your branch to the `demo1` or `demo2` branches e.g. `git push -f origin my-branch-name:demo1`
2. Your branch will be published:
  - https://demo1--mozilla-protocol.netlify.com/
  - https://demo2--mozilla-protocol.netlify.com/

A notice will be posted in #www-notify on Slack when the push has completed.

# Acknowledgements

Protocol started out life as a fork of Drizzle, by Cloud Four:

- [Drizzle][drizzle]
