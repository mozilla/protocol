---
title: Brand Themes
name: Brand Themes
---

Protocol supports two distinct brands: Mozilla and Firefox.

The Mozilla brand is distinguished by the Mozilla Headline and Mozilla Text typefaces and a limited color
palette, mostly black and white. The Firefox brand uses the Metropolis typeface
and is generally more colorful overall.

Our CSS framework achieves the different themes by using [CSS Custom properties](https://developer.mozilla.org/docs/Web/CSS/--*)
set on the root element using the `:root` pseudo-class, and these custom properties will be changed depending on
which brand is represented on the page.

(Note: Since CSS Custom Properties aren't supported by legacy browsers,
Protocol still uses a default theme with Sass variables for those browsers.)

Protocol defaults to the Mozilla brand “out of the box.” If you use the packaged,
pre-compiled CSS, you’ll have everything you need for a Mozilla-branded website
without needing to compile the Sass yourself. We still recommend doing your own
compiling so you can import just the components you need.

```scss
$brand-theme: 'mozilla';
```

If you want to produce a Firefox-branded website you’ll need to compile the
Protocol Sass and change the `$brand-theme` variable:

```scss
$brand-theme: 'firefox';
```

## Type scales

Protocol uses a modular type scale with a range of predefined font sizes to maintain
consistency and avoid sizing text willy nilly in designs. Scale sizes and line
heights are defined as part of the brand theme, and each brand has a slightly
different scale. [See our page on Typography](/fundamentals/typography.html#type-scale)
for more info and examples.

Additionally, there are two different scales available: a standard scale with
large titles, appropriate for most general websites (like marketing sites, blogs,
etc) and a condensed scale with smaller sizes more suitable for web applications.

Protocol defaults to the standard (big titles) type scale:

```scss
$type-scale: 'standard';
```

You can activate the condensed type scale by setting a variable when you compile
the Sass:

```scss
$type-scale: 'condensed';
```

## Component themes

In addition to the global themes for brand and type scale, we have a few standard
component-level theming classes you can use. Smaller components intended to appear
in groups (like Cards and Pictos) shouldn't be themed individually, but can appear
in a larger container with the theme class applied to the entire group.

### Dark theme

Many components have an inverse color variant that applies a dark background color
with light foreground colors, invoked with the `mzp-t-dark` theme class.

### Section backgrounds

There’s a basic `mzp-t-background-alt` class that applies a secondary background
color to most elements or components, especially useful for alternating sections
of a page.
