# Protocol

Protocol is a design system for Mozilla and Firefox websites. It establishes a common design language, provides reusable coded components, and outlines high level guidelines for content and accessibility.

https://protocol.mozilla.org/

Protocol is still an evolving project. It is used primarily by the Mozilla Websites Marketing team, as the front-end for [https://www.mozilla.org](https://www.mozilla.org). The long term aim is a design system that can be used by anyone at Mozilla to build an on-brand website.

If you're interested in using Protocol in your project, let us know and we can help you. You can find us in #protocol-design-system on Mozilla’s Slack (for Mozillians) or [file an issue on GitHub](https://github.com/mozilla/protocol/issues).</p>

![Current npm package version.](https://img.shields.io/npm/v/@mozilla-protocol/core)
![Total downloads on npm.](https://img.shields.io/npm/dt/@mozilla-protocol/core)
![Pull requests welcome!](https://img.shields.io/badge/PRs-welcome-brightgreen)

## Getting Started

Protocol is built on the [Node.js](https://nodejs.org/) platform and published to [NPM](https://www.npmjs.com/), so be sure to have both installed before proceeding.

## Installation

To use Protocol in your website you can install the core package directly from NPM:

```
npm install @mozilla-protocol/core --save
```

Alternatively, you can also [download the latest release](https://github.com/mozilla/protocol/releases/latest) from GitHub.

## Usage

Once installed, the relevant CSS and JS files will be available in your project under `./node_modules/@mozilla-protocol/core/`.

The core CSS file is bundled as `protocol.css`, which contains styling for things such as basic elements and typography. Component and layout CSS is bundled as `protocol-extra.scss` for convenience.

**Note**: The original source (.scss) files are also included in the published package. You may want to consider compiling your own CSS to include only what you need for each page of your website, in order to further optimize for performance.

## Building From Source

To build Protocol from source including the documentation site, you can clone the repo from GitHub:

```
$ git clone https://github.com/mozilla/protocol.git
$ cd protocol
$ npm start
```

Running `npm start` will install dependencies, build your toolkit, and start the development server at <http://localhost:3000>.

## Further Documentation

- [Project Structure](docs#project-structure)
- [Build Process](docs#build-process)
- [Publishing](docs#publishing-to-npm)
- [Deployment](docs#deployment)
- [Acknowledgements](docs#acknowledgements)


