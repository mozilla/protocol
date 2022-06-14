This container class sets up a multi-column layout with two, three, or four
columns. It’s content-agnostic but not all Protocol components will work
within a multi-column layout.

A theme class sets the number of columns:
- `mzp-t-columns-two`
- `mzp-t-columns-three`
- `mzp-t-columns-four`

Columns are evenly sized and evenly spaced. Every column in a group is the
same width with the same gutters (space between columns).

We don’t currently have options for an uneven distribution of columns, such
as two columns in one-third/two-thirds proportions. If you need that kind of
layout you’ll need to use an alternative method.

This uses [CSS grid](https://developer.mozilla.org/docs/Web/CSS/CSS_Grid_Layout),
which is [well supported in modern browsers](https://caniuse.com/css-grid) but
not supported in any browsers release prior to 2018. Older browsers will ignore
the column layout and content will be linearized by default. If you need a
multi-column layout in older browsers you’ll need to use an alternative method.

The contents of each column should be in its own container element that must be
a _direct child_ of the multi-column container, as shown in the examples. The kind
of element doesn’t matter (`<div>`, `<section>`, `<p>`, `<img>`, etc), it just needs
to be a direct child of the container.

The `mzp-l-columns` class doesn’t apply a width; without any other constraints the
column container will fill the width of its own container, which may be the browser
window. Use this in conjunction with a [Content Container](/components/detail/content-container--default),
either nested or applying both classes to the same container.

A column’s width isn’t explicit; the width of a column depends on the number of
columns and the width of the container (which also varies).

Gutters between columns are `64px` at most viewport sizes, but expand to `80px`
in extra large viewports.

Column layouts change automatically at different breakpoints, or in different
container widths.
- Small viewports and containers are always a single column.
- In medium viewports or containers, three columns will be a single column.
- In medium viewports or containers, four columns will be two columns with the
  third and fourth wrapping under the first and second.

### No-nos
Avoid nesting column containers. It gets weird. (For example, if you try to get
six columns by putting two three-column containers in a two-column layout you’re
gonna have a bad time.)
