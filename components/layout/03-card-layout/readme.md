There are a few layout classes available for displaying
[Card components](card) in different arrangements,
applied to a container element around a group of Cards.
- `mzp-l-card-half` - Two columns
- `mzp-l-card-third` - Three columns
- `mzp-l-card-quarter` - Four columns
- `mzp-l-card-hero` - A five-card arrangement with one main hero card

These CSS classes can be applied to any suitable parent element e.g. `<main>`,
`<section>`, `<div>`, etc. They can apply directly to an existing
[content container](content-container) (`mzp-l-content`)
or to an element within one.

All cards stack in a single column on small screens but can adapt to different
grid formations on wider screens.

### Tips

- The grid layout is reversed in right to left (RTL) languages.
- If using the `mzp-l-card-hero` parent class, make sure to indicate which child
  card element is to be the large hero card by giving it a `mzp-c-card-large` class.
