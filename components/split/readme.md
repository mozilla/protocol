This is a full-width page section with text on one side and a single piece of
media (an image or video) on the other, hence “split” into two columns. It’s
highly customizable with a lot of optional classes to support different layout
variations.

- No default typography styles are applied to the body text; use other components
  or CSS for text styling.
- The body and media will stack in small viewports, switching to the two-column
  split layout in larger viewports.
- You can choose your preferred source order, with the media before or after the
  body, to optimize how you’d like it to stack in small viewports.
- Set the maximum content width by adding a class to the outermost containing
  block (`mzp-c-split`):
  - `mzp-t-content-md`
  - `mzp-t-content-lg`
  - `mzp-t-content-xl`
  - Note the lack of a “small” option. Content in two columns in a narrow container
    is usually a bad idea so we’re not providing it.
- The Split is an even 50/50 by default, but you can adjust the body width (the
  part with the text) to make a 33/66 proportion. Add one of these classes to the
  outermost container (`mzp-c-split`):
  - `mzp-l-split-body-narrow` - body is one third, media is two thirds.
  - `mzp-l-split-body-wide` - body is two thirds, media is one third.
  - Note that the wide and narrow body variants only take effect in larger
    viewports; it will be 50/50 in medium viewports (mostly to preserve readable
    line lengths). It stacks in small viewports, as normal.
- The orientation of the body and media changes automatically in right-to-left
  languages. By default, the body is on the left in left-to-right languages on
  the right in RTL. You can reverse the layout explicitly with a class on the
  main container (`mzp-c-split`):
  - `mzp-l-split-reversed`
  - A reversed layout will *also* reverse automatically in right-to-left languages.
- Align the body, horizontally and vertically (it's aligned left by default in
  LTR, and vertically centered). Apply these classes to the body container
  (`mzp-c-split-body`):
  - `mzp-l-split-h-center` - horizontally centered.
  - `mzp-l-split-h-end` - aligned right in left-to-right languages, left in right-to-left.
  - `mzp-l-split-v-start` - vertically aligned to the top.
  - `mzp-l-split-v-end` - vertically aligned to the bottom.
- Align the media in different positions, horizontally and vertically (it’s
  aligned left by default on LTR, and vertically centered). Apply these classes
  to the media container (`mzp-c-split-media`):
  - `mzp-l-split-h-center` - horizontally centered.
  - `mzp-l-split-h-end` - aligned right in left-to-right languages, left in right-to-left.
  - `mzp-l-split-v-start` - vertically aligned to the top.
  - `mzp-l-split-v-end` - vertically aligned to the bottom.
- Choose how to treat the Split on small screens. Apply these classes to the
  outer container (`mzp-c-split`):
  - `mzp-l-split-center-on-sm-md` - content is centered on small to medium screens.
  - `mzp-l-split-hide-media-on-sm-md` - media is hidden on small to medium screens.

### Nesting inside a container

By default, Split is intended to be a full-width section of a page, with an
outer container that spans the width of the viewport. Split has its own inner
container to define its content width.

If you need to nest Split inside another container (e.g. `mzp-l-content`), add
the `mzp-l-split-nested` class to the outermost element (`mzp-c-split`). This
removes the inner container's max-width and padding so it fills the parent
container without doubling up on spacing.
