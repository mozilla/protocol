A Sticky Promo is a small box of content positioned in the bottom corner of the
window, intended to ensure that the content it’s promoting remains a constant on
the page – always visible within the viewport no matter a user’s scroll position.
It can be dismissed with a click.

Sticky Promos can be used to promote a product and provide a call to action, or
potentially for some other kind of dismissable information (not to be confused
with the [Notification Bar](notification-bar)).

The Sticky Promo container itself is both content and context agnostic. Content
should be short and succinct, ideally just a few lines. Too much content will
make the promo excessively tall and cover too much of the page.

This component requires `protocol-sticky-promo.js`. The promo is hidden by default
and made visible by the `Mzp.StickyPromo.open()` function. As a helper, you can
set the sticky promo to automatically once the page is loaded by adding
`mzp-js-show-on-load` to the class list.

### Tips

- Use only one Sticky Promo per page.
- The Sticky Promo is positioned in the lower right corner in LTR languages
  and in the lower left corner in RTL languages.
- Add one of these product theme classes to include a logo above the title:
  - `mzp-t-product-firefox`
  - `mzp-t-product-beta`
  - `mzp-t-product-developer`
  - `mzp-t-product-nightly`
- A dark theme is also available with the theme class `mzp-t-dark`.
