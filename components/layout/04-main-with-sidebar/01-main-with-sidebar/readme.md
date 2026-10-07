A block with a main column and one sidebar on either the start or end side (this
example uses `mzp-l-sidebar-start`). A single page should only have one main
section and one sidebar.

The columns will stack in small viewports, form a 1/3-2/3 split in medium sized
viewports, and a 1/4-3/4 split in wider viewports (limiting the width of the
sidebar).

This layout template only sets up the basic columns. The main content column is
quite wide in large viewports and can result in uncomfortably long lines of text.
You may want to use other nested elements to limit line lengths.

Colored borders are for demonstration only. They are not part of the component
styles.

### Tips

- Layout class `mzp-l-sidebar-start` or `mzp-l-sidebar-end` is required.
- Start and end follow the text direction: a start sidebar appears on the left
  in left to right (LTR) languages and on the right in right to left (RTL) languages.
- The main content can be wrapped in any valid HTML element. We’re using `main`
  in this example but it could also be an `article`, `section`, `div`, etc.
- The sidebar should usually be an `aside` element but you could use other elements.
- The layout works regardless of source order, so arrange elements to suit the
  content. Some sidebar content is less important than the main and should come
  after it in source.
