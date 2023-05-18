A fullscreen modal displayed in on top of the page elements. Usually showcases
a title, image/video, and description.

### Usage

Import using Webpack as an ES module:

```javascript
import MzpModal from '@mozilla-protocol/core/protocol/js/modal';
```

Import using Webpack as CommonJS:

```javascript
const MzpModal = require('@mozilla-protocol/core/protocol/js/modal');
```

Import as a global variable via a `<script>` tag:

```javascript
const MzpModal = window.MzpModal;
```

You can then initialize the component using `createModal()`. For the modal to work it is required that you pass
references to the DOM element that triggered the modal, and a DOM element containing the content you wish to
display.

```javascript
MzpModal.createModal(origin, content, options);
```

You can also pass a range of configuration options:

```javascript
MzpModal.createModal(origin, content, {
  title: 'Example headline with 35 characters',
  className: 'mzp-has-media',
  closeText: 'Close modal',
  onCreate: function() {
    console.log('Modal opened');
  },
  onDestroy: function() {
    console.log('Modal closed');
  }
});
```

Modal options are as follows:

- `origin` [DOM Element] element that triggered the modal (required)
- `content` [DOM Element] content to display in the modal (required)
- `options` [Object] object of optional params
  - `title` [String] title to display at the top of the modal
  - `className` [String] optional CSS class name to apply to the modal window.
  - `onCreate` [Function] function to fire after modal has been created
  - `onDestroy` [Function] function to fire after modal has been closed
  - `allowScroll` [Boolean] allow/restrict page scrolling when modal is open
  - `closeText` [String] text to use for close button a11y.

### Tips

- Make sure to initialize the component *after* the DOM has loaded.
- You can use the utility class `mzp-u-modal-content` to hide content (when JS
  is enabled) that is intended to be shown only once a modal is displayed.
- Any HTML content you wish can be displayed within a modal.
- You can pass an additional `className` of `mzp-has-media` to the modal to
  indicate that if the modal contains an image or video, those elements should
  be displayed full width.
- Media content should occupy the full width of the modal dialog and be at
  least `1200px` wide.
