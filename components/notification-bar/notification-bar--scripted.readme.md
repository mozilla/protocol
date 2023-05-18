Protocol also provides a JavaScript library to invoke and dismiss a notification
bar.

### Usage

Import using Webpack as an ES module:

```javascript
import MzpNotification from '@mozilla-protocol/core/protocol/js/notification-bar';
```

Import using Webpack as CommonJS:

```javascript
const MzpNotification = require('@mozilla-protocol/core/protocol/js/notification-bar');
```

Import as a global variable via a `<script>` tag:

```javascript
const MzpNotification = window.MzpNotification;
```

You can then initialize the component using `init()`. For the notification to work it is required that you pass
a reference to the DOM element that triggered the modal, as well as a title to display.

```javascript
MzpNotification.init(origin, options);
```

You can also pass a range of configuration options:

```javascript
MzpNotification.init(origin, {
  title: 'This is the title.',
  cta: {
    text: "And this is a CTA link.",
    url: "https://www.mozilla.org",
    attrs: {"target": "_blank", "rel": "noopener"}
  },
  className: 'mzp-t-warning',
  closeText: 'Close notification',
  hasDismiss: true,
  isSticky: true,
  onNotificationOpen: function () {
    console.log('Notification opened');
  },
  onNotificationClose: function () {
    console.log('Notification closed');
  }
});
```

Notification options are as follows:

- `origin` [DOM Element] element that triggered the notification
- `options` [Object] object of params
  - `title` [String] message to display in the notification. (Required)
  - `cta`: [Object] options for rendering an Anchor node after the title.
    - `text`: (Required) text content for an Anchor element
    - `url`: (Required) URL for the Anchor element
    - `attrs`: map of additional options for the Anchor element, eg: 'target',
      'rel'
  - `className` [String] optional CSS class name to apply to the notification.
  - `onNotificationOpen` [Function] function to fire after notification has
    been opened.
  - `onNotificationClose` [Function] function to fire after notification has
    been closed.
  - `hasDismiss` [Boolean] include or not include dismiss button.
  - `closeText` [String] text to use for close button a11y.
  - `isSticky` [Boolean] determines if notification is absolutely positioned
    and sticky.

### Tips

- Make sure to initialize the component *after* the DOM has loaded.
