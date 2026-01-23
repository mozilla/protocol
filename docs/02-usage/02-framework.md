---
title: The Protocol CSS Framework
label: Protocol CSS
status: draft
---

When you compile Protocol Sass as part of your project’s build process, you’ll
also have access to all the mixins, functions, and [design tokens](/docs/fundamentals/design-tokens)
that style Protocol components.

## Mixins

Protocol relies on numerous [Sass mixins](https://sass-lang.com/documentation/at-rules/mixin)
to simplify and standardize repetitive code. Some are fairly simple shortcuts and
others do more complex work. We won’t list them all here, but we’ll describe a
few of the more notable ones. All our mixins are in `/includes/_mixins.scss` or
in separate files in the `/includes/mixins/` folder. You’ll find even more
documentation as comments directly in the source files.

### Text sizes
Protocol uses a modular type scale with a range of predefined font sizes, and to
maintain the consistency of that scale we rely on mixins for all of our text
sizing. See [our page on typography](/docs/fundamentals/typography) for more info
and examples.

```scss
@include text-heading-lg;
```

Different themes have slightly different type scales so this mixin draws its
output from the defined brand theme. See [our page on themes](/docs/fundamentals/brand-themes)
for more info and examples.

### bidi
The bidi mixin (short for “bi-directional”) is used to declare both left-to-right
and right-to-left values for a CSS property together, and output appropriate
declarations for each. This makes it easier to support right-to-left languages –
such as Hebrew and Arabic – while keeping both styles in the same place. Whenever
you’re floating or aligning something to one side, you might prefer to use the
bidi mixin to reverse that direction for other languages. Refer to
`/includes/mixins/_bidi.scss` for more documentation and usage.

```scss
@include bidi(((content, '\2192', '\2190'),));
```

### at2x
at2x is a helpful mixin for applying a high-resolution background image, for
display on high definition screens (a.k.a. “retina”). It automatically outputs
the standard resolution background image with the high-resolution version in a
media query, along with the `background-size` property to scale it. Both image
files should be in the same folder and have matching names, with the high
resolution version suffixed with “high-res”, e.g. `example.png` and
`example-high-res.png`

```scss
@include at2x('/img/example.png', 100px, 100px);
```

### light-links
The light-links mixin inverts link colors in elements/components with dark
backgrounds.

```scss
@include light-links;
```

### white-links
The white-links mixin explicitly sets link colors (in all pseudo-class states) to
white. This is useful for some elements/components with dark backgrounds where
the regular inverted link colors might be undesirable, typically for utilitarian
components like a footer.

```scss
@include white-links;
```

### Themes

Protocol supports [multiple brand themes](/docs/fundamentals/brand-themes), namely
the Mozilla and Firefox brands. Themes work by declaring a set of CSS Custom Properties
on the document's root element (`:root`) in `/includes/_themes.scss` and are retrieved
using the `var()` function. The custom properties will be updated depending on what theme is declared.


```scss
.mzp-c-my-component {
    background-color: var(--background-color);
    color: var(--theme-body-text-color);

    .mzp-c-my-component-heading {
        color: var(--theme-heading-text-color);
        font-family: var(--theme-heading-font-family);
    }
}
```

Use CSS Custom Properties for any themeable properties, especially basic
colors for foreground (text) and backgrounds. Note that most colors have an
“inverse” counterpart to use in dark style variants. Refer to `/includes/_themes.scss`
for the actual values for each brand theme, but here are the variable names in a
handy list:

```text
background-color
background-color-alt
background-color-alt-inverse
background-color-inverse
body-font-family
body-text-color
body-text-color-alt
body-text-color-alt-inverse
body-text-color-inverse
button-font-family
link-color
link-color-hover
link-color-hover-inverse
link-color-inverse
link-color-visited
link-color-visited-inverse
heading-font-family
heading-text-color
heading-text-color-inverse
```

Text sizes are also defined as theme variables, allowing different brands to have
slightly different type scales. Don’t use CSS Custom Properties for text
sizing; use the text size mixins instead. The mixins already draw from the theme
variables but come with baked-in responsive styling as well.

### Utility classes

Whilst Protocol tries to avoid reliance on utility classes, we do support a few well
chosen use cases, where utility classes can allow for some very basic visual styling
directly in HTML.

These classes are purely presentational, so should only be used in situations where
you're not already writing CSS for an element. A good example use case might be
content delivered through a CMS, or when it would be more effort to write custom
styles for something that requires only the most very basic layout.

#### Centered text

The `mzp-u-centered` utility class apply `text-align: center;` to an element's
text content.

```html
<div class="mzp-u-centered">
  The text content of this element is centered
</div>
```

#### Heading sizes

A range of utility classes are available for heading sizes. See the
[typography page](/docs/fundamentals/typography) for more details.

```html
<h1 class="mzp-u-heading-2xl">Heading 2XL</h1>
<h2 class="mzp-u-heading-xl">Heading XL</h2>
<h3 class="mzp-u-heading-lg">Heading LG</h3>
<h4 class="mzp-u-heading-md">Heading MD</h4>
<h5 class="mzp-u-heading-sm">Heading SM</h5>
<h6 class="mzp-u-heading-xs">Heading XS</h6>
<h6 class="mzp-u-heading-2xs">Heading 2XS</h6>
<h6 class="mzp-u-heading-3xs">Heading 3XS</h6>
```
