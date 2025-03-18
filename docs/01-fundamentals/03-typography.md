---
title: Typography
---

## Typefaces
Protocol comes with four fonts: Mozilla Headline, Mozilla Text, Metropolis, and Inter.

Mozilla branded websites use Mozilla Headline for titles and Mozilla Text for body text. We recommend Mozilla Headline only for text over 24px (below should be Mozilla Text).

Firefox branded websites use Metropolis for titles and Inter for body text. Don’t
use Metropolis for body text.

### Inter

Inter is an open source, sans-serif font designed by [Rasmus Andersson](https://rsms.me/inter/).
This is our standard type face for body copy in Firefox and is used as fallback font in Mozilla brands.
If you need to declare it specifically (such as to override some other inherited
font) you can use the mixin `@include font-base;`.

* [Download from https://rsms.me/inter/](https://rsms.me/inter/)

<figure id="specimen-inter" class="docs-specimen docs-specimen-font">
  <strong>{{ specimens.alphabet }}</strong>
  {{ specimens.alphabet }}
  {{ specimens.characters }}
  {{ specimens.digits }}
  {{ specimens.punctuation }}
  {{ specimens.special }}
  {{ specimens.math }}
</figure>

### Mozilla

Mozilla Headline and Mozilla Text are our custom typefaces for the Mozilla brand. This typeface font family features a unique uniwidth design. It maintains standardized spacing and kerning across all weights and styles, eliminating risk of text reflow to preserve the integrity of the layout and enhance the user's experience. [Read more about Mozilla's rebrand here](https://blog.mozilla.org/en/mozilla/mozilla-brand-next-era-of-tech/)

You can declare Mozilla Headline explicitly with the mixin `@include font-mozilla-headline;`.

You can declare Mozilla Text explicitly with the mixin `@include font-mozilla-headline;`.

#### Mozilla Headline

<figure id="specimen-mozilla-headline" class="docs-specimen docs-specimen-font">
  <strong>{{ specimens.alphabet }}</strong>
  {{ specimens.alphabet }}
  {{ specimens.characters }}
  {{ specimens.digits }}
  {{ specimens.punctuation }}
  {{ specimens.special }}
  {{ specimens.math }}
</figure>

#### Mozilla Text

<figure id="specimen-mozilla-text" class="docs-specimen docs-specimen-font">
  <strong>{{ specimens.alphabet }}</strong>
  {{ specimens.alphabet }}
  {{ specimens.characters }}
  {{ specimens.digits }}
  {{ specimens.punctuation }}
  {{ specimens.special }}
  {{ specimens.math }}
</figure>

### Metropolis

Metropolis is a free, open source font used for headlines on marketing and product
web experiences. It’s a geometric sans-serif font by Chris Simpson, very similar
in style and character to Firefox Sharp Sans, the proprietary font used to create
logo lockups for Firefox products (**do not use Firefox Sharp Sans as a webfont**).

Use Metropolis for large text like headings. As a general rule, type set in
Metroplis should stand out. Avoid stacking two sizes of Metropolis one on top of
the other. Pair headings in Metropolis with subheadings in Inter.

You can declare Metropolis explicitly with the mixin `@include font-firefox;`.

Don’t italicize Metropolis. Protocol only includes regular and bold versions of
this font.

* [Download from Fonts Arena](https://fontsarena.com/metropolis-by-chris-simpson/)

<figure id="specimen-metropolis" class="docs-specimen docs-specimen-font">
  <strong>{{ specimens.alphabet }}</strong>
  {{ specimens.alphabet }}
  {{ specimens.characters }}
  {{ specimens.digits }}
  {{ specimens.punctuation }}
  {{ specimens.special }}
  {{ specimens.math }}
</figure>

## Type Scale

We limit the number of text sizes to a predetermined set, to maintain consistency
and avoid sizing text willy nilly in designs.

<div id="specimen-type-scale" class="docs-specimen">
  <span class="docs-scale-sample docs-scale-sample-title-2xl">Title 2XL</span>
  <span class="docs-scale-sample docs-scale-sample-title-xl">Title XL</span>
  <span class="docs-scale-sample docs-scale-sample-title-lg">Title LG</span>
  <span class="docs-scale-sample docs-scale-sample-title-md">Title MD</span>
  <span class="docs-scale-sample docs-scale-sample-title-sm">Title SM</span>
  <span class="docs-scale-sample docs-scale-sample-title-xs">Title XS</span>
  <span class="docs-scale-sample docs-scale-sample-title-2xs">Title 2XS</span>
  <span class="docs-scale-sample docs-scale-sample-title-3xs">Title 3XS</span>
  <span class="docs-scale-sample docs-scale-sample-body-xl">Body XL</span>
  <span class="docs-scale-sample docs-scale-sample-body-lg">Body LG</span>
  <span class="docs-scale-sample docs-scale-sample-body-md">Body MD</span>
  <span class="docs-scale-sample docs-scale-sample-body-sm">Body SM</span>
  <span class="docs-scale-sample docs-scale-sample-body-xs">Body XS</span>
</div>

The title sizes are 3XS through 2XL. Of these, the most commonly used are SM, MD,
LG, and XL. Use the XS, 2XS, and 3XS title sizes sparingly for labels and UI
elements, and the 2XL title size sparingly to make an especially bold statement.

We use three sizes of regular body copy: MD, LG and XL. Use MD for normal, default
body text and LG when you need slightly larger text to stand out, like the
introduction to an article. The XL body size is useful for taglines or subtitles,
but not for long passages of text. There are two sizes of smaller body text: SM
and XS, used sparingly for supporting text like footnotes or disclaimers, never
for main body copy.

### Themes

Protocol includes different branded themes for Mozilla and Firefox, and each theme
uses different fonts with a slightly altered scale. Titles set in Mozilla Headline for
the Mozilla brand are slightly larger than their Firefox equivalents, adjusting
for Mozilla Headline being overall a smaller display font.

### Condensed Type Scale

As you can see above, the standard Protocol type scale features big sizes for
headings and titles appropriate for most general websites (like marketing sites,
blogs, etc). Protocol also includes an alternative, condensed scale with smaller
sizes more suitable for web applications.

<div id="specimen-type-scale-condensed" class="docs-specimen">
  <span class="docs-scale-sample docs-scale-sample-title-2xl">Title 2XL</span>
  <span class="docs-scale-sample docs-scale-sample-title-xl">Title XL</span>
  <span class="docs-scale-sample docs-scale-sample-title-lg">Title LG</span>
  <span class="docs-scale-sample docs-scale-sample-title-md">Title MD</span>
  <span class="docs-scale-sample docs-scale-sample-title-sm">Title SM</span>
  <span class="docs-scale-sample docs-scale-sample-title-xs">Title XS</span>
  <span class="docs-scale-sample docs-scale-sample-title-2xs">Title 2XS</span>
  <span class="docs-scale-sample docs-scale-sample-title-3xs">Title 3XS</span>
  <span class="docs-scale-sample docs-scale-sample-body-xl">Body XL</span>
  <span class="docs-scale-sample docs-scale-sample-body-lg">Body LG</span>
  <span class="docs-scale-sample docs-scale-sample-body-md">Body MD</span>
  <span class="docs-scale-sample docs-scale-sample-body-sm">Body SM</span>
  <span class="docs-scale-sample docs-scale-sample-body-xs">Body XS</span>
</div>

### Code

We use Sass mixins to declare these font sizes:

```scss
@include text-title-2xl;
@include text-title-xl;
@include text-title-lg;
@include text-title-md;
@include text-title-sm;
@include text-title-xs;
@include text-title-2xs;
@include text-title-3xs;
@include text-body-xl;
@include text-body-lg;
@include text-body-md;
@include text-body-sm;
@include text-body-xs;
```

Those mixins include media queries to adjust the sizes at key breakpoints. Text
gets bigger as the viewport gets bigger. You can resize your window to see this
in action on the samples above or on most of our components.

The sizing mixins in turn use another mixin to convert a pixel size to `rem` for
output, assuming a `16px` root size (the default in graphical browsers). Because
we use `rem` for font sizing all of our declared sizes are really just suggestions
and the end user can resize as they see fit. Text sizes are always variable so
design accordingly.

#### Title utility classes

There are also a set of CSS utility class names available to use directly on HTML
heading elements for convenience.

```html
<h1 class="mzp-u-title-2xl">Title 2XL</h1>
<h2 class="mzp-u-title-xl">Title XL</h2>
<h3 class="mzp-u-title-lg">Title LG</h3>
<h4 class="mzp-u-title-md">Title MD</h4>
<h5 class="mzp-u-title-sm">Title SM</h5>
<h6 class="mzp-u-title-xs">Title XS</h6>
<h6 class="mzp-u-title-2xs">Title 2XS</h6>
<h6 class="mzp-u-title-3xs">Title 3XS</h6>
```
