A "choice" is either a checkbox or radio button that recieves custom styling when it appears within an `mzp-c-choices` container.

- Use `mzp-c-choice-control` for both checkboxes and radio buttons.
- Choices stack by default. Use `mzp-l-choices-inline` for inline choices.
- The `input` must come before the `label` in source order. We usually encourage wrapping the `label` around both the control and the label text, but the elements need to be separate to achieve the custom control styling.
