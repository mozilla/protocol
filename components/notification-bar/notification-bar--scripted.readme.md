Protocol also provides a JavaScript library to invoke and dismiss a notification bar.

The script provides the following options:

- `origin` [DOM Element] element that triggered the notification
- `options` [Object] object of params
  - `title` [String] message to display in the notification. (Required)
  - `cta`: [Object] options for rendering an Anchor node after the title.
    - `text`: (Required) text content for an Anchor element
    - `url`: (Required) URL for the Anchor element
    - `attrs`: map of additional options for the Anchor element, eg: 'target', 'rel'
  - `className` [String] optional CSS class name to apply to the notification.
  - `onNotificationOpen` [Function] function to fire after notification has been opened.
  - `onNotificationClose` [Function] function to fire after notification has been closed.
  - `hasDismiss` [Boolean] include or not include dismiss button.
  - `closeText` [String] text to use for close button a11y.
  - `isSticky` [Boolean] determines if notification is absolutely positioned and sticky.
