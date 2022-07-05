A Card is a unit of content featuring an image along with a title and description,
wrapped in a block-level link.

Cards come in a variety of sizes, activated by adding a modifier class:
- Extra-small : `mzp-c-card-extra-small`
- Small : The default, no modifier class
- Medium : `mzp-c-card-medium`
- Large : `mzp-c-card-large`

Cards support images in three different aspect ratios, also indicated by a class:
- 1:1 : `mzp-has-aspect-1-1`
- 3:2 : `mzp-has-aspect-3-2`
- 16:9 : `mzp-has-aspect-16-9`

Because cards are responsive and may change size in different viewports, you
should take some care in sizing images appropriately:
- Extra-small : `450px` wide (low-res), `900px` wide (high-res)
- Small : `450px` wide (low-res), `900px` wide (high-res)
- Medium : `600px` wide (low-res), `1200px` wide (high-res)
- Large : `930px` wide (low-res), `1860px` wide (high-res)

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

The default Card size with no other modifier classes is small:
- Small sized cards can contain images with 16:9, 3:2 or 1:1 aspect ratios.
- The card in this example displays an icon next to the card tag name, to indicate
  the media type that may be played on click.
- Recommended image width is `450px` (low-res), `900px` (high-res).
    - high-res examples: 16:9 = `900px` x `506px`, 3:2 = `900px` x `600px`,
    1:1 = `900px` x `900px`
- Headlines should be a maximum of 50 characters, and descriptions a maximum of
  150 characters.
