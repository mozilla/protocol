A page footer component, containing common links to complement primary navigation
and flexible structure. It is best viewed with “[full view](/components/preview/footer)”
as it’s meant to take up the full width of the page.

### Usage

Import using Webpack as an ES module:

```javascript
import MzpFooter from '@mozilla-protocol/core/protocol/js/footer';
```

Import using Webpack as CommonJS:

```javascript
const MzpFooter = require('@mozilla-protocol/core/protocol/js/footer');
```

Import as a global variable via a `<script>` tag:

```javascript
const MzpFooter = window.MzpFooter;
```

You can then initialize the component using `init()`.

```javascript
MzpFooter.init();
```

### Dependencies

The Footer component depends on the Details component in order to support expandable sections on small viewports.
It is recommended to include `MzpDetails` in your page as a global object before loading your Footer component script.

```javascript
import MzpDetails from '@mozilla-protocol/core/protocol/js/details');

window.MzpDetails = MzpDetails;
```

### Tips

- Make sure to initialize the component *after* the DOM has loaded.

The Footer component supports several optional elements including:

- logo
- footer-sections (with links)
- [language selector](language-switcher)
- social media icons.

This demo includes all optional elements and six footer sections (footer sections
will be evenly spaced across component width whatever number you use).

See [Example Basic](example-basic) for a simpler demo.
