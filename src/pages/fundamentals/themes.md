---
title: Themes
name: Themes
order: 2
---

Protocol supports two distinct brands: Mozilla and Firefox.

The Mozilla brand is distinguished by the Zilla Slab typeface and a limited color palette, mostly black and white. The Firefox brand uses the Metropolis typeface and is generally more colorful overall.

Our CSS framework achieves the different themes by assigning variables to several style properties, then drawing from different sets of variables to apply different styling based on which brand is represented on the page. These variables are collected into maps and we then use functions in SCSS to swap to a different map based on a single theme variable:

```scss
$brand-theme: 'mozilla';
```
(Note: this kind of theming is also possible with [custom properties in native CSS](https://developer.mozilla.org/docs/Web/CSS/--*), but Protocol still needs to support older browsers so we use SCSS variables.)

Protocol defaults to the Mozilla brand “out of the box.” If you use the packaged, pre-compiled CSS, you’ll have everything you need for a Mozilla-branded website without needing to compile the SCSS yourself. We still recommend doing your own compiling so you can import just the components you need.

If you want to produce a Firefox-branded website you'll need to compile the Protocol SCSS and change the `$brand-theme` variable:

```scss
$brand-theme: 'firefox';
```

- [An example of the Mozilla theme](/demos/theme-mozilla.html)
- [An example of the Firefox theme](/demos/theme-firefox.html)

## Type scales

Protocol uses a modular type scale with a range of predefined font sizes to maintain consistency and avoid sizing text willy nilly in designs. Scale sizes and line heights are defined as part of the brand theme, and each brand has a slightly different scale. [See our page on Typography](/fundamentals/typography.html#type-scale) for more info and examples.

Additionally, there are two different scales available: a standard scale with large titles, appropriate for most general websites (like marketing sites, blogs, etc) and a condensed scale with smaller sizes more suitable for web applications.

Protocol defaults to the standard (big titles) type scale:

```scss
$type-scale: 'standard';
```

You can activate the condensed type scale by setting a variable when you compile the SCSS:

```scss
$type-scale: 'condensed';
```

## Component themes

In addition to the global themes for brand and type scale, we have a few standard component-level theming classes you can use. Smaller components intended to appear in groups (like Cards and Pictos) shouldn't be themed individually, but can appear in a larger container with the theme class applied to the entire group.

### Dark theme

Many components have an inverse color variant that applies a dark background color with light foreground colors, invoked with the `mzp-t-dark` theme class.

### Section backgrounds

There's a basic `mzp-t-background-alt` class that applies a secondary background color to most elements or components, especially useful for alternating sections of a page.
