You can add an icon to a button as an inline image enclosed in a `span` with the
class `mzp-c-button-icon-start` if the icon appears before the text label or
`mzp-c-button-icon-end` if it appears after the label.

You can optionally use a standard unicode character or symbol, but be aware not
all platforms will support all characters. Icon fonts are also an option, with
all the usual caveats about using webfonts. You can use an emoji but they also
may not be supported equally across platforms and even on supporting platforms
they’ll be rendered in completely different styles by different systems. For
consistency and reliability, use an image.

### Tips
- Prefer simple, single-color icons. Complex images likely won’t render well at
  such a small size. Multicolored icons or logos may not adapt to different
  backgrounds as the button state changes.

- Prefer embedded SVG over an external `img` (whether SVG or other format). An
  inline SVG icon can more easily change color for the different button states
  and style variants. Be aware that very old browsers don’t support SVG.

- Consider the text direction of the page language. Arrows in particular indicate
  a specific orientation that may be confusing in text that flows the opposite
  direction. The “Next” and “Previous” buttons shown here are a good example of
  how this can go wrong. In a right-to-left language, the “Next” arrow moves to
  the left of the text label, but still points to the right. A properly
  bi-directional design should reverse those icons as well.

### Tips for inline SVG
- Optimize SVG files for embedding inline in the HTML document. Strip out unnecessary
  comments or metadata added by editing tools. Use [SVGO](https://svgo.dev/)
  either locally on [online](https://jakearchibald.github.io/svgomg/).

- Merge shapes and paths where possible to reduce the number of elements and points.

- Avoid unnecessary grouping of elements.

- Define colors with `currentColor`. This will inherit the icon’s color from the
  button text, including color changes in hover and focus states. An icon with
  its own defined colors will need to accommodate background color changes,
  either with a color that is visible on all backgrounds, or facilitating a
  color change some other way besides `currentColor` (e.g. with additional CSS).

### No-Nos
- Don’t add multiple icons to a button. Technically Protocol doesn’t prevent it,
  it’s just a bad idea.


