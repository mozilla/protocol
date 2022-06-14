Main site Navigation, containing Menu (todo) and [Secondary Download Button](/components/detail/download-button--secondary) components.

- On wide viewports, navigation content is displayed inline.
- On small viewports, navigation content is hidden by default and toggled via a menu icon.
    - Add `has-label` to the button to display the text label with the menu icon.
- The logo is always visible.
    - Switch to the Firefox logo by adding the class `mzp-t-firefox` above the element with class="mzp-c-navigation-logo"
- Navigation can be initialized using `Mzp.Navigation.init(options)`, where options is an Object with the following properties.
    - `onNavOpen` [Function] A callback when the small screen navigation icon is clicked to open (optional).
    - `onNavClose` [Function] A callback when the small screen navigation icon is clicked to close (optional).
- Navigation can opt-in to sticky scroll behaviour by adding the class `mzp-is-sticky`.
    - Sticky behaviour will only be applied to viewports that are wider than `$mq-md` and taller than `$mq-tall`.
    - Sticky behaviour will never be applied for users who prefer reduced motion.
