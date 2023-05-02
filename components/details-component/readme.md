The Details component converts a section of content into a collapsible accordion, turning
each heading into a control to expand or collapse all the content that comes after it.
This simulates the functionality of the [native `<details>` element](details), but can
apply to any element.

### Usage

Import using Webpack as an ES module:

```
import MzpDetails from '@mozilla-protocol/core/protocol/js/details';
```

Import using Webpack as CommonJS:

```
const MzpDetails = require('@mozilla-protocol/core/protocol/js/details');
```

Import as a global variable via a `<script>` tag:

```
const MzpDetails = window.MzpDetails;
```

The Details component will be automatically initialized in a page for any HTML elements that contain
a `.mzp-c-details` class name and a child `h2` to `h6` heading element.

### Dependencies

The Details component depends on both the `MzpSupports` and `MzpUtils` libraries for feature detection
and DOM traversal. It is recommended that both are included in your page and accessible via a global
object before loading your Details component script.

```
import MzpSupports from '@mozilla-protocol/core/protocol/js/supports';
import MzpUtils from '@mozilla-protocol/core/protocol/js/utils';

window.MzpSupports = MzpSupports;
window.MzpUtils = MzpUtils;
```

### Tips

- Make sure to initialize the component *after* the DOM has loaded.
- Only collapses headings highest in the hierarchy. E.g., if the highest ranked heading is
  `<h3>`, all `<h3>`s will be converted and the content between them will be collapsed.
- Assumes all content following a heading is intended to be hidden.
