The `<details>` element was introduced in HTML5 to provide a native collapsible
“accordion” widget that previously required JavaScript. It's natively supported
across Protocol's [supported browsers](/docs/usage/browser-support.html), so no
polyfill is needed. If you need more control over the open/close behavior than
the native element provides, use the JS-driven Protocol
[Details component](details-component) instead.

The `<details>` element requires a `<summary>`. Use `<details>` only for content
that has no headings, and keep the summary to plain text: `<summary>` has no
ARIA role of its own and some screen readers expose it as a button, so a
heading placed inside it is left out of heading navigation. For collapsible
content that is organized by headings, use the
[Details component](details-component) instead, which turns each heading into
an expand/collapse control while keeping the heading element in place.

Note: though they’re visually similar, this native HTML element is distinct from
the Protocol [Details component](details-component).

### Links

- [MDN `<details>`](https://developer.mozilla.org/docs/Web/HTML/Element/details)
- [MDN `<summary>`](https://developer.mozilla.org/docs/Web/HTML/Element/summary)
