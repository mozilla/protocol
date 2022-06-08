A component for changing the language of the current page.

### Notes
- Assumes the first path in the page URL immediately after hostname is a valid locale code e.g. https://www.mozilla.org/en-US/firefox/.
- This molecule can be displayed inside the Footer organism, but could also be used elsewhere if more appropriate.
- The link `mzp-c-cta-link` is optional, and should be used only if a website has a page dedicated to language selection. If omitted, the form `<label>` will be displayed visually instead
- An optional theme class `mzp-t-dark` can be applied for use on dark backgrounds.
- Inline JavaScript in this example is for demo purposes only. Use external files in production code.
