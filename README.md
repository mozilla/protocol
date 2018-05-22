# Protocol

A modular design system for Mozilla websites.

https://mozilla-protocol.netlify.com/

## Quick Start

To use Protocol in your website you can install the core package directly from NPM:

```
npm install @mozilla-protocol/core --save
```

Alternatively, you can also [download the latest release](https://github.com/mozilla/protocol/releases/latest) from GitHub.

## Usage

Once installed, the relevant CSS and JS files will be available in your project under `./mode_modules/@mozilla-protocol/core/`

The core CSS is bundled as `protocol.css`. This contains styling for things such as basic elements and typography. Component and layout CSS is bundled as `protocol-extra.scss` for convenience.

**Note**: The original source (scss) files are also included in the published package. You may want to consider compiling your own CSS to include only what you need for each page of your website, in order to further optimize for performance.

### Building from source

To build Protocol from source including the documentatiion site, you can clone the repo from GitHub:

```
$ git clone https://github.com/mozilla/protocol.git
$ cd protocol
$ npm start
```

For a more info, read the [installation docs](docs#installation).

## Documentation

- [Getting Started](docs#getting-started)
- [Project Structure](docs#project-structure)
- [Gulp Tasks](docs#tasks)
- [Publishing](docs#publishing)


