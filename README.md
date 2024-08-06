# Mozilla Protocol

Protocol is a design system for Mozilla and Firefox websites. It establishes a
common design language, provides reusable coded components, and outlines high
level guidelines for content and accessibility.

https://protocol.mozilla.org/

Protocol is still an evolving project. Currently, it’s used primarily by the
Mozilla Marketing Websites team as the front-end for [www.mozilla.org](https://www.mozilla.org).
The long term goal is to provide a robust, unified design system that anyone at
Mozilla can use to build an on-brand website.

If you’re interested in using Protocol on your project, let us know and we can
help you. You can find us in #protocol-design-system on Mozilla’s Slack (for
Mozillians) or in #protocol-design-system on [Matrix](https://chat.mozilla.org/)
(open to the public). Also feel free to
[file an issue on GitHub](https://github.com/mozilla/protocol/issues).

[![Current npm package version.](https://img.shields.io/npm/v/@mozilla-protocol/core)](https://www.npmjs.com/package/@mozilla-protocol/core)
[![Total downloads on npm.](https://img.shields.io/npm/dt/@mozilla-protocol/core)](https://github.com/mozilla/protocol/releases)
[![Pull requests welcome!](https://img.shields.io/badge/PRs-welcome-93c?logo=github
)](https://protocol.mozilla.org/docs/contributing/overview)

## Getting Started

Protocol is built on the [Node.js](https://nodejs.org/) platform and published
to [NPM](https://www.npmjs.com/package/@mozilla-protocol/core), so be sure to have both installed before
proceeding.

## Installation

To use Protocol in your website you can install the core package directly from
NPM:

```
npm install @mozilla-protocol/core --save
```

Alternatively, you can also [download the latest release](https://github.com/mozilla/protocol/releases/latest)
from GitHub.

## Usage

Once installed, the relevant CSS, JavaScript, and asset files will be available
in your project under `./node_modules/@mozilla-protocol/core/`.

The core CSS file is bundled as `protocol.css`, which contains styling for things
such as basic elements and typography, as well as some global components like
navigation and a footer. Other component and layout CSS is bundled as
`protocol-components.css` for convenience.

However, these pre-compiled CSS files include the _entire_ pattern library, which
you may not need. We recommend compiling your own styles from the source Sass
files, also included in the published package. That allows you to configure Protocol
to include just the styles and components you need for each page of your website.

## Make it Run

To build Protocol from source and run the documentation site locally, you can
clone the repo from GitHub:

```
$ git clone https://github.com/mozilla/protocol.git
$ cd protocol
$ npm install
```

Running `npm install` will install dependencies. Then:

```
$ npm run webpack
```

This will compile the Sass and copy assets into a local folder in preparation to
run the server. It also starts a “watch” process that will watch those files and
automatically recompile when they change.

In another command line console (and still within the Protocol folder), run:

```
$ npm start
```

This will build the site locally and start the development server at
<http://localhost:3000>.

## Building the website

To build the Protocol documentation site for deployment, run:

```
$ npm run build-docs
```

## Building the NPM package

We use a [Webpack](https://webpack.js.org/) configuration for building the contents
of the NPM package ready for publishing. To build the package, run:

```
npm run build-package
```

This will install dependencies, lint CSS/JS files, and then build the package
content in the `./package/` directory.

## Running tests

To perform the package build process above and then run front-end JS tests against
the processed files:

```
npm test
```

## Publishing to NPM

Protocol is published to NPM under the `@mozilla-protocol/core` namespace/package
name. To publish a release to NPM, use the following steps:

1. Before you start make sure the project's [CHANGELOG.md](https://github.com/mozilla/protocol/blob/main/CHANGELOG.md)
    is up to date.
2. Update the package `version` number in [assets/package/package.json](https://github.com/mozilla/protocol/blob/main/assets/package/package.json)
    (use [Semantic Versioning](https://semver.org/) to determine what the new version number
    should be).
3. Update the package README [assets/package/README.md](https://github.com/mozilla/protocol/blob/main/assets/package/README.md).
4. Update the package `version` number in the root [package.json](https://github.com/mozilla/protocol/blob/main/package.json) file and then run `npm install` to update the `package-lock.json` file.
5. Submit a pull request with your changes (or commit directly to `main` if you
    have permission). Once the changes have been merged to main:
6. Tag a new release. You can do this either using [Git tag](https://git-scm.com/book/en/v2/Git-Basics-Tagging),
    or directly on the [GitHub website](https://github.com/mozilla/protocol/releases/latest).
7. Run `npm run build-package && npm test` to run the build script and front-end tests. The package contents
    will be located in `./package/`.
8. If the build is successful and all tests pass, publish to NPM using `npm publish ./package/`.

## Deployment

Note: the following instructions assume the Mozilla repository is the remote
called `origin`.

### Pushing to production

Each time an updated package is published to NPM, https://protocol.mozilla.org/
should also be updated so the documentation site matches the NPM package features.

1. Verify all is good on the [staging site](https://main--mozilla-protocol.netlify.app/).
2. Make sure your local `main` branch is up to date.
3. Push the `main` branch to the `prod` branch: `git push origin main:prod`.

A notice will be posted in #www-notify on Slack when the push has completed.

### Pushing to demo

For previewing new components before they are merged to `main`, two demo instances
are available.

1. Push your branch to the `demo1` or `demo2` branches e.g.
    `git push -f origin my-branch-name:demo1`
2. Your branch will be published:
  - https://demo1--mozilla-protocol.netlify.app/
  - https://demo2--mozilla-protocol.netlify.app/

A notice will be posted in #www-notify on Slack when the push has completed.
