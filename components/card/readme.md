A Card is a unit of content featuring an image along with a title and description,
wrapped in a block-level link.

Cards come in a variety of sizes, activated by adding a modifier class:
- Small : `mzp-c-card-small`
- Medium : The default, no modifier class
- Large : `mzp-c-card-large`

Cards support images in three different aspect ratios, also indicated by a class:
- 1:1 : `mzp-has-aspect-1-1`
- 3:2 : `mzp-has-aspect-3-2`
- 16:9 : `mzp-has-aspect-16-9`

Because cards are responsive and may change size in different viewports, you
should take some care in sizing images appropriately. The recommended image
size depends on the card layout:
- 4-column layout: `450px` wide (low-res), `900px` wide (high-res)
- 3-column layout: `600px` wide (low-res), `1200px` wide (high-res)
- 2-column layout: `930px` wide (low-res), `1860px` wide (high-res)

In addition to the image, title, and description, cards may hold a few other
distinct pieces of content:
- A tag, sometimes with an icon, above the title.
- A Call To Action
- A small meta label

A card must contain at minimum an image and either a title or a description (or
both). All other content is optional. Try to keep card titles to one or two lines
(about 50 characters max) and descriptions to two or three lines (about 150
characters max). Tags should be short, just one or two words. Calls to Action and
meta labels should fit on one line, about 30-40 characters max.

The optional tag can also include an icon, indicated by a modifier class on the
card container:
- `mzp-has-video`
- `mzp-has-audio`

The default Card size with no other modifier classes is medium:
- Small sized cards can contain images with 16:9, 3:2 or 1:1 aspect ratios.
- The card in this example displays an icon next to the card tag name, to indicate
  the media type that may be played on click.
- Headlines should be a maximum of 50 characters, and descriptions a maximum of
  150 characters.
