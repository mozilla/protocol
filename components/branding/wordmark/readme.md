A Wordmark component displays a wordmark image (logo with text) in a range of
sizes, with a standard bottom margin. It's similar to the Logo component but
also inverts the color of the wordmark text when it appears in a container with
an `mzp-t-dark` class.

This component requires two SCSS files: one for the component itself and one for
the particular product to display (to avoid loading unused styles for all the
different products). You’ll need to include both in your compiled Sass/SCSS to
display a wordmark.

Add the component class `mzp-c-wordmark`, the size class (eg: `mzp-t-wordmark-md`),
and the product class (eg: `mzp-t-product-firefox`) to your markup. All three
are necessary to display a logo.

Size classes:
- `mzp-t-wordmark-xs`
- `mzp-t-wordmark-sm`
- `mzp-t-wordmark-md`
- `mzp-t-wordmark-lg`
- `mzp-t-wordmark-xl`

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

Wordmarks are aligned with text by default (either left or right, depending on
text direction). Some additional layout classes are available to center the
wordmark on all viewports or only in small viewports.

Layout classes:
- `mzp-l-wordmark-center`
- `mzp-l-wordmark-center-on-sm-md`

### Tips
This component uses CSS image replacement to display a background image in place
of the element’s text content. If you use the wordmark as meaningful content like
a title or heading, include the product name as accessible text. Leave the element
empty if the wordmark is strictly decorative.

