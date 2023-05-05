A component for changing the language of the current page.

### Usage

Import using Webpack as an ES module:

```
import MzpLangSwitcher from '@mozilla-protocol/core/protocol/js/lang-switcher';
```

Import using Webpack as CommonJS:

```
const MzpLangSwitcher = require('@mozilla-protocol/core/protocol/js/lang-switcher');
```

Import as a global variable via a `<script>` tag:

```
const MzpLangSwitcher = window.MzpLangSwitcher;
```

You can then initialize the component using `init()`.

```
MzpLangSwitcher.init();
```

You can also pass a custom callback for when a language selection takes place:

```
MzpLangSwitcher.init((previousLanguage, newLanguage) => {
  console.log('Previous language:', previousLanguage);
  console.log('New language:', newLanguage)
});
```

### Tips

- Make sure to initialize the component *after* the DOM has loaded.
- Assumes the first path in the page URL immediately after hostname is a valid locale code e.g. https://www.mozilla.org/en-US/firefox/.
- This component can be displayed inside the Footer component, but could also be used elsewhere if more appropriate.
- The link `mzp-c-cta-link` is optional, and should be used only if a website has a page dedicated to language selection. If omitted, the form `<label>` will be displayed visually instead
- An optional theme class `mzp-t-dark` can be applied for use on dark backgrounds.
