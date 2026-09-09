The `<details>` element was introduced in HTML5 to provide a native collapsible
“accordion” widget that previously required JavaScript. It's natively supported
across Protocol's [supported browsers](https://protocol.mozilla.org/docs/usage/browser-support), so no
polyfill is needed. If you need more control over the open/close behavior than
the native element provides, use the JS-driven Protocol
[Details component](details-component) instead.

The `<details>` element requires a `<summary>`, which you can combine with
headings to convey hierarchy, if appropriate.

Note: though they’re visually similar, this native HTML element is distinct from
the Protocol [Details component](details-component).

### Links

- [MDN `<details>`](https://developer.mozilla.org/docs/Web/HTML/Element/details)
- [MDN `<summary>`](https://developer.mozilla.org/docs/Web/HTML/Element/summary)
