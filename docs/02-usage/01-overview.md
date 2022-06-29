---
title: Using Protocol on Your Website
label: Overview
status: draft
---

Protocol is built on the [Node.js](https://nodejs.org/) platform and published
as an [NPM package](https://www.npmjs.com/package/@mozilla-protocol/core), so be
sure to have both installed before proceeding.

## Installation

To use Protocol in your website with minimal fuss you can install the core package
directly from NPM:

```
npm install @mozilla-protocol/core --save
```

Alternatively, you can also [download the latest release](https://github.com/mozilla/protocol/releases/latest)
from GitHub.

Once installed, the relevant CSS, JavaScript, and asset files will be available
in your project under `./node_modules/@mozilla-protocol/core/`.

The core CSS file is bundled as `protocol.css`, which contains styling for things
such as basic elements and typography, as well as some global components like
navigation and a footer. Other component and layout CSS is bundled as
`protocol-components.css` for convenience.

However, these pre-compiled CSS files include the _entire_ pattern library, which
may be a lot more than you need need. We recommend compiling your own styles from
the source Sass files, also included in the published package. That allows you to
configure Protocol to include just the styles and components you need for each
page of your website.

## Compiling Protocol

Styling is written in Sass using the SCSS syntax. Protocol styles are fragmented
into separate [Sass partials](https://sass-lang.com/guide#topic-4) so you can
import just the parts you need and keep your CSS files light. You can do this on
a per-page basis so each page gets its own stylesheet for just the components
needed on that page. Or you can take a hybrid approach with a global stylesheet
for general styling and common components as well as separate, per-page stylesheets
for components and page-specific styling as needed.

The `protocol.scss` file is an example of a global Protocol-based stylesheet. It
sets a few common variables and imports fonts and base styles. Modify your own
version of that file to configure Protocol for your site.
