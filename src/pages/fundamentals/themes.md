---
title: Themes
name: Themes
order: 2
---

Protocol supports two distinct brands: Firefox and Mozilla.

The Mozilla brand is distinguished by the Zilla Slab typeface and a limited color palette, mostly black and white. The Firefox brand uses the Metropolis typeface and is generally more colorful overall.

Our CSS framework achieves the different themes by assigning variables to several style properties, then drawing from different sets of variables to apply different styling based on which brand is represented on the page. These variables are collected into maps and we then use functions in SCSS to swap to a different map based on a single theme variable:

```scss
$brand-theme: 'firefox';
```
(Note: this kind of theming is also possible with [custom properties in native CSS](https://developer.mozilla.org/docs/Web/CSS/--*), but Protocol still needs to support older browsers so we use SCSS variables.)

Protocol defaults to the Firefox brand “out of the box.” If you use the packaged, pre-compiled CSS, you’ll have everything you need for a Firefox-branded website without needing to compile the SCSS yourself. We still recommend doing your own compiling so you can import just the components you need.

If you want to produce a Mozilla-branded website you'll need to compile the Protocol SCSS and change the `$brand-theme` variable:

```scss
$brand-theme: 'mozilla';
```

- [An example of the Firefox theme](/demos/theme-firefox.html)
- [An example of the Mozilla theme](/demos/theme-mozilla.html)

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
