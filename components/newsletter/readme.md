The standard newsletter subscription form.

This component only provides the essentials for form display. Making this
newsletter form fully functional requires additional functionality. See
the [Basket example](https://github.com/mozilla/basket-example/) for more.

### Usage

Import using Webpack as an ES module:

```javascript
import MzpNewsletter from '@mozilla-protocol/core/protocol/js/newsletter';
```

Import using Webpack as CommonJS:

```javascript
const MzpNewsletter = require('@mozilla-protocol/core/protocol/js/newsletter');
```

Import as a global variable via a `<script>` tag:

```javascript
const MzpNewsletter = window.MzpNewsletter;
```

You can then initialize the component using `init()`.

```javascript
MzpNewsletter.init();
```

### Tips

- Make sure to initialize the component *after* the DOM has loaded.
- Some newsletters are only available in one language, so don’t require a
  language selection.
