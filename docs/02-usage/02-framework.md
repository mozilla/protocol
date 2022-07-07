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

### Font stacks and variable fonts

Protocol supports [variable font](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Fonts/Variable_Fonts_Guide)
formats for type faces such as Inter. In order to maintain compatibility with
older web browsers, the `font-family-variable` mixin can be used to specify a
fallback font stack.

```scss
@include font-family-variable($font-stack-base-variable, $font-stack-base);
```

There are also several font family/theme mixins available that will
automatically include variable font support:

```scss
@include font-base;
@include font-firefox;
@include font-mozilla;

@include font-theme-body;
@include font-theme-title;
@include font-theme-button;
```

### Text sizes
Protocol uses a modular type scale with a range of predefined font sizes, and to
maintain the consistency of that scale we rely on mixins for all of our text
sizing. See [our page on typography](/docs/fundamentals/typography) for more info
and examples.

```scss
@include text-title-lg;
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
@include bidi(((float, left, right),));
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
the Mozilla and Firefox brands. Themes work by defining sets of variables in Sass
maps in the `/includes/_themes.scss` file, and those variables are fetched via
the `get-theme()` function. That function determines which set of variables to
draw from based on the declared brand theme, thus any themeable property in CSS
can have different values for different brands.

```scss
.mzp-c-my-component {
    background-color: get-theme('background-color');
    color: get-theme('body-text-color');

    .mzp-c-my-component-title {
        @include font-theme-title;
        color: get-theme('title-text-color');
    }
}
```

Use the `get-theme()` function for any themeable properties, especially basic
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
body-font-family-variable
body-text-color
body-text-color-alt
body-text-color-alt-inverse
body-text-color-inverse
button-font-family
button-font-family-variable
link-color
link-color-hover
link-color-hover-inverse
link-color-inverse
link-color-visited
link-color-visited-hover
link-color-visited-hover-inverse
link-color-visited-inverse
title-font-family
title-font-family-variable
title-text-color
title-text-color-inverse
```

Text sizes are also defined as theme variables, allowing different brands to have
slightly different type scales. Don’t use the `get-theme()` function for text
sizing; use the text size mixins instead. The mixins already draw from the theme
variables but come with baked-in responsive styling as well.
