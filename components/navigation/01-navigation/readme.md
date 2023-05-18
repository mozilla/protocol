Main site Navigation, containing [Menu](menu) and
[Secondary Download Button](download-button--secondary) components.

### Usage

Import using Webpack as an ES module:

```javascript
import MzpNavigation from '@mozilla-protocol/core/protocol/js/navigation';
```

Import using Webpack as CommonJS:

```javascript
const MzpNavigation = require('@mozilla-protocol/core/protocol/js/navigation');
```

Import as a global variable via a `<script>` tag:

```javascript
const MzpNavigation = window.MzpNavigation;
```

You can then initialize the component using `init()`.

```javascript
MzpNavigation.init();
```

You can also pass custom callbacks for nav open and close events as a configuration object like so:

```javascript
MzpNavigation.init({
  onNavOpen: function () {
    console.log('Navigation opened');
  },
  onNavClose: function () {
    console.log('Navigation closed');
  }
})
```

### Dependencies

The Menu component is a child of the Navigation component, and is therefore a dependency. You need to
import the `MzpMenu` component as a global variable and initialize it along side `MzpNavigation`.

```javascript
import MzpMenu from '@mozilla-protocol/core/protocol/js/menu');

window.MzpMenu = MzpMenu;

window.MzpMenu.init();
```

### Tips

- Make sure to initialize the component *after* the DOM has loaded.
- On wide viewports, navigation content is displayed inline.
- On small viewports, navigation content is hidden by default and toggled via a
  menu icon.
  - Add `has-label` to the button to display the text label with the menu icon.
- The logo is always visible.
  - Switch to the Firefox logo by adding the class `mzp-t-firefox` above the
    element with `class="mzp-c-navigation-logo"`
- Navigation can opt-in to sticky scroll behavior by adding the class `mzp-is-sticky`.
  - Sticky behavior will only be applied to viewports that are wider than
    `$mq-md` and taller than `$mq-tall`.
  - Sticky behavior will never be applied for users who prefer reduced motion.
