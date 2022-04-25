These tooltip-style messages are useful for supplemental error messages after a form has been validated, not for notes that would need to be shown before user interaction.

Error messages should be short and simple. They should indicate what the user needs to do to resolve the error, not simply state that an error occurred.

Bad example: "Invalid e-mail"

Good example: "Provide a complete e-mail address, like "yourname@example.com""

### Tips
- Add the `mzp-is-error` class to any parent element to apply error styling to the form controls.
- Connect the form field and the message with an `aria-describedby` attribute.
- Add `role="tooltip"` to the message to improve accessbility.
