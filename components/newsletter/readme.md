The standard newsletter subscription form.

This component provides both form styling and the functionality required to
POST directly to [Basket](https://basket.mozilla.org/).

Note: the example form on this page is fully functional.

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

You can also pass custom callbacks for both sign-up success and failure, which
can be useful for things like analytics events.

```javascript
const successCustomCallback = () => {
  // custom on success code
};

const errorCustomCallback = () => {
  // custom on error code
};

MzpNewsletter.init(successCustomCallback, errorCustomCallback);
```

### Tips

- Make sure to initialize the component *after* the DOM has loaded.
- Both country and language fields are optional.
- If there is only one newsletter, you can use a hidden input field for the newsletter ID instead of a checkbox.
- Use `success@example.com` as the email to have the request return successfully but not actually record a subscription, and `failure@example.com` to always return failure.
- The `source_url` hidden input field value should match the URL of the page where the newsletter form appears. This is used to attribute where the sign-up originated from.
