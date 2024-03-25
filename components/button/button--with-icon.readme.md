You can add an icon to a button by including the theme class `mzp-t-icon-start`
to position the icon before the text label, or `mzp-t-icon-end` to position it
after the text label.

The icon itself is enclosed in a `span` with the class `mzp-c-button-icon`.
It should precede the label text when using `mzp-t-icon-start` and follow the label
text when using `mzp-t-icon-end`. Think of it almost like a character of text.

### Tips
- Prefer simple, single-color icons. Complex images likely won’t render well at
  such a small size. Multicolored icons or logos may not adapt to different
  backgrounds as the button state changes.

- Prefer inline SVG over an external `img` (whether SVG or other format). Inline
  SVG can more easily change color for the different button states and style
  variants.

- Consider the text direction of the page language. Arrows in particular indicate
  a specific orientation that may be confusing in text that flows the opposite
  direction. The “Next” and “Previous” buttons shown here are actually a good example.
  In a right-to-left language, the “Next” arrow moves to the left of the text label,
  but still points to the right. A properly bi-directional design should reverse
  those icons as well.

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


