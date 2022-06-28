The `mzp-c-button-container` class can be used around a group of buttons. It
applies a flexbox context and the default form spacing. Modifier classes can
then be added to change the layout.

- Buttons are stacked, centered, and full-width on small screens (though with a
  `max-width` of `300px`).
- On larger screens, buttons are inline and aligned with the text direction
  (left in LTR languages, right in RTL languages)
- Modifier classes for more layout options:
  - `mzp-l-align-end` aligns buttons opposite to the text (right in LTR languages,
    left in RTL languages).
  - `mzp-l-align-center` aligns buttons in the center.
  - `mzp-l-stretch` makes buttons fill the width of the container. Multiple
    buttons will be stacked and full-width in smaller viewports, and appear
    inline and stretched in larger viewports. This option is best suited to
    narrow forms.
- Although the examples here show two buttons, most forms will have only one.
- Use the `mzp-c-button-info` to add a brief note in small text, typically for
  some kind of disclaimer or contextual information about the form being
  submitted. It usually appears below/after the buttons but in some cases could
  appear above/before.
