A Logo component displays a logo image in a range of sizes, with a standard
bottom margin.

This component requires two SCSS files: one for the component itself and one for
the particular product to display (to avoid loading unused styles for all the
different products). You’ll need to include both in your compiled Sass/SCSS to
display a logo.

Add the component class `mzp-c-logo`, the size class (eg: `mzp-t-logo-md`), and
the product class (eg: `mzp-t-product-firefox`) to your markup. All three are
necessary to display a logo.

Size classes:
- `mzp-t-logo-xs`
- `mzp-t-logo-sm`
- `mzp-t-logo-md`
- `mzp-t-logo-lg`
- `mzp-t-logo-xl`

Product classes:
- `mzp-t-product-family`
- `mzp-t-product-firefox`
- `mzp-t-product-beta`
- `mzp-t-product-developer`
- `mzp-t-product-nightly`
- `mzp-t-product-focus`
- `mzp-t-product-lockwise`
- `mzp-t-product-monitor`
- `mzp-t-product-mozilla`
- `mzp-t-product-vpn`
- `mzp-t-product-pocket`
- `mzp-t-product-relay`

Logos are aligned with text by default (either left or right, depending on text
direction). Some additional layout classes are available to center the logo on
all viewports or only in small viewports.

Layout classes:
- `mzp-l-logo-center`
- `mzp-l-logo-center-on-sm-md`

### Tips
This component uses CSS image replacement to display a background image in place
of the element’s text content. If you use the logo as meaningful content like a
title or heading, include the product name as accessible text. Leave the element
empty if the logo is strictly decorative.
