Similar to the Call-Out component, this is a more compact section with smaller copy
and a horizontal layout. It features at minimum a headline and a call to action. The
content and call to action swap positions in RTL languages.

Product icons can be displayed using an additional theme class:
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
the `mzp-l-content` [container](/components/detail/content-container). The nested
spacing will get weird.
