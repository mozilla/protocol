A fullscreen modal displayed in on top of the page elements. Usually showcases
a title, image/video, and description.

The modal’s JavaScript provides the following options:
- `origin` [DOM Element] element that triggered the modal
- `content` [DOM Element] content to display in the modal
- `options` [Object] object of optional params
  - `title` [String] title to display at the top of the modal
  - `className` [String] optional CSS class name to apply to the modal window.
  - `onCreate` [Function] function to fire after modal has been created
  - `onDestroy` [Function] function to fire after modal has been closed
  - `allowScroll` [Boolean] allow/restrict page scrolling when modal is open
  - `closeText` [String] text to use for close button a11y.

Inline JavaScript in this example is for demo purposes only. Use external files
in production code.

### Tips

- You can use the utility class `mzp-u-modal-content` to hide content (when JS
  is enabled) that is intended to be shown only once a modal is displayed.
- Any HTML content you wish can be displayed within a modal.
- You can pass an additional `className` of `mzp-has-media` to the modal to
  indicate that if the modal contains an image or video, those elements should
  be displayed full width.
- Media content should occupy the full width of the modal dialog and be at
  least `1200px` wide.
