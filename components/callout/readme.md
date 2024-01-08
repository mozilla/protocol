A Callout component is a prominent section of a page that may contain a headline,
a description, a CTA button, a logo or wordmark, and an image or video. It’s a
generally content-agnostic container with centered content, though shouldn’t be
used for long-form content. Text in a Callout is center aligned so it’s best to
keep it short.

You can include an image or video with the class `mzp-c-callout-media` (this just
adds a bit of spacing above and below the media).

This component spans the full width of the viewport so a full-bleed background
can be applied with either a pre-defined background class or in your local CSS.
  - Secondary: `mzp-t-background-secondary`
  - Tertiary: `mzp-t-background-tertiary`
  - Dark: `mzp-t-dark`
  - Secondary dark: `mzp-t-dark mzp-t-background-secondary`
  - Tertiary dark: `mzp-t-dark mzp-t-background-tertiary`

You can set the maximum content width by adding a class to the inner container
(`mzp-l-content`):
  - `mzp-t-content-sm`
  - `mzp-t-content-md`
  - `mzp-t-content-lg`
  - `mzp-t-content-xl`

### Notes

The Callout component (without a dash) is a refactor and replacement for the
previous Call-out component (with dash), which has been renamed without a dash:

- New Callout: `mzp-c-callout`, `@import 'components/callout';`
- Old Call-out: `mzp-c-call-out`, `@import 'components/call-out';`

Previously there was also a separate Compact Call-out component (`mzp-c-call-out-compact`).
That component has been removed and replaced by a variant layout of Callout using
the modifier class `mzp-l-compact`.

### No-nos

This component already has an inner container, so don’t place it inside another
`mzp-l-content` [container](content-container). The nested spacing will get
weird.
