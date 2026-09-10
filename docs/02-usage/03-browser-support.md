---
title: Browser Support
label: Browser Support
---

Protocol supports:

- **Firefox ESR** and current Firefox
- **Safari 15.6** and later (macOS and iOS)
- **Chrome, Edge, and other "evergreen" browsers**

This matrix is declared as the `browserslist` key in
[`package.json`](https://github.com/mozilla/protocol/blob/main/package.json),
which drives both the Sass build's CSS minification and the Babel target for
the compiled JavaScript.

## What this means for your project

If you compile Protocol's Sass yourself, your own build tooling should target
the same matrix (or a subset of it) to avoid re-introducing legacy CSS output.

Protocol no longer ships vendor-prefixed fallbacks, `@supports` feature-query
fallbacks for older engines, or IE-era polyfills. If your project needs to
support browsers outside this matrix, you'll need to add your own fallback
styles and polyfills.

## Testing

Protocol's automated test suite (`npm test`) runs unit tests in Firefox and
Chrome. Safari is not currently covered by CI; if you rely on Safari support,
we recommend a manual smoke test of your integration.
