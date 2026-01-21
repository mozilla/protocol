An expandable menu used in the [Navigation](navigation) component, consisting of
[Menu Items](menu-item) and an optional Card component.

### Usage

Import using Webpack as an ES module:

```javascript
import MzpMenu from '@mozilla-protocol/core/protocol/js/menu';
```

Import using Webpack as CommonJS:

```javascript
const MzpMenu = require('@mozilla-protocol/core/protocol/js/menu');
```

Import as a global variable via a `<script>` tag:

```javascript
const MzpMenu = window.MzpMenu;
```

You can then initialize the component using `init()`.

```javascript
MzpMenu.init();
```

You can also pass custom callbacks for menu open and close events as a configuration object like so:

```javascript
MzpMenu.init({
  onMenuOpen: function () {
    console.log('Menu opened');
  },
  onMenuClose: function () {
    console.log('Menu closed');
  },
  onMenuButtonClose: function () {
    console.log(
      'Menu close button clicked');
  }
})
```

### Tips

- Make sure to initialize the component *after* the DOM has loaded.
- On wide viewports a menu's content is displayed when hovering or focusing on
  a menu link.
- On small viewports a menu's content is expanded/collapsed when clicking on a
  menu link.
- Menu content should consist of two lists of one or more [Menu Items](menu-item).
- A [Small Card](card--small) can also be included inside a menu
  using the `mzp-has-card` class. Cards are only visible on wide viewports.
- A menu can also feature regular links that do not expand on hover/click by
  omitting the `mzp-has-drop-down` and `mzp-js-expandable` classes.
- A menu with a state class of `mzp-is-basic` is accessible without JavaScript.
  This state class gets replaced with `mzp-is-enhanced` when JS is executed.
