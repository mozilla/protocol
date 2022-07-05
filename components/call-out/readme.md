A Call-Out is a prominent section of a page that contains at minimum a headline,
but also may feature a logo, description, and a call-to-action button. Content
is centered.

Product logos can be displayed using an additional theme class:
- `mzp-t-product-firefox`
- `mzp-t-product-beta`
- `mzp-t-product-developer`
- `mzp-t-product-nightly`
- `mzp-t-product-focus`
- `mzp-t-product-mozilla`
- `mzp-t-product-vpn`
- `mzp-t-product-pocket`

This component spans the full width of the viewport. It has a secondary background
color by default and a dark theme is available with the class `mzp-t-dark`.

### No-nos

This component already has an inner container, so don’t place it inside
the `mzp-l-content` [container](content-container). The nested spacing will get
weird.
