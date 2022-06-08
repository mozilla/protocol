The Details component converts a section of content into a collapsable accordion, turning
each heading into a control to expand or collapse all the content that comes after it.
This simulates the functionality of the [native `<details>` element](details), but can
apply to any element.

Use the `mzp-c-details` on a container element and, when initialized, the JavaScript will
do the rest.

- Only collapses headings highest in the hierarchy. E.g., if the highest ranked heading is
  `<h3>`, all `<h3>`s will be converted and the content between them will be collapsed.
- Assumes all content following a heading is intended to be hidden.

