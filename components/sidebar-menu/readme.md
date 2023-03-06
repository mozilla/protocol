Local navigation for a subset of pages or section of a website, intended to
appear in a sidebar adjacent to the main content. It can accommodate multiple
categories/sub-sections in a two-level hierarchy with titles corresponding to
the top level page of each sub-section.

The menu summary reflects the current page, shown when the menu is collapsed in
small viewports. The menu label should be the title of the site section.

### Usage

Import using Webpack as an ES module:

```
import MzpSideMenu from '@mozilla-protocol/core/protocol/js/sidemenu';
```

Import using Webpack as CommonJS:

```
const MzpSideMenu = require('@mozilla-protocol/core/protocol/js/sidemenu');
```

Import as a global variable via a `<script>` tag:

```
const MzpSideMenu = window.MzpSideMenu;
```

You can then initialize the component using `init()`.

```
MzpSideMenu.init();
```

### Tips

- Make sure to initialize the component *after* the DOM has loaded.
- Indicate the current page with the `mzp-is-current` class.
