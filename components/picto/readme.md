A small block of content featuring a pictographic icon, a headline, and body.

- Pictos are best suited for a [multi-column layout](/patterns/templates/columns.html) but will otherwise stack in a single column.
- Without any other constraints, a Picto has a maximum width of 688px (equal to the "medium" content width).
- The image should usually be a small icon (hence "picto") but larger images or even videos can be accommodated in some layouts.
- Three variants are available:
    - The image on top, aligned with the text (this is the default).
    - The image on top with text and image centered.
    - The image on one side, aligned to the top of the text.
- The picto variant is determined by a theme class on a container element so the same variant applies to the entire set:
    - The default (image on top, aligned with text) doesn't require a theme class.
    - `mzp-t-picto-center`
    - `mzp-t-picto-side`
- All parts are optional. For example, you could omit the headline and only use body text, or omit the body and only have a headline. Technically you could omit the image but then you might prefer some other component (but is a Picto without a picto really a Picto?).

### Tips
- This component should typically appear in groups of at least two. A single Picto is feasible but should be an uncommon exception.
- All the images in a set of Pictos should be the same height so they'll all align neatly.

### No-nos:
- Avoid mismatching the number of Picto components to the number of columns, e.g. four Pictos in a three-column layout. It won't break, but the fourth one will wrap to another line and leave awkward empty space.
- Don't combine style variants; centered text with the image on the side doesn't look quite right.
