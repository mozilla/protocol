---
title: Typography
---

## Typefaces
Protocol comes with three fonts: Zilla Slab, Metropolis, and Inter.

Mozilla branded websites use Zilla Slab for titles and Inter for body text. Don’t
use Zilla Slab for body text.

Firefox branded websites use Metropolis for titles and Inter for body text. Don’t
use Metropolis for body text.

### Inter

Inter is an open source, sans-serif font designed by [Rasmus Andersson](https://rsms.me/inter/).
This is our standard type face for body copy in both Firefox and Mozilla brands.
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

### Zilla Slab</h3>

Zilla Slab is our custom typeface for the Mozilla brand. We use it for our wordmark
and as a display font for headlines on Mozilla branded sites. It’s a contemporary
slab serif based on Typotheque’s Tesla. Zilla Slab is a free, open source font
available for download.

Zilla Slab is primarily a display font and should only be used on large text like
headings. As a general rule, type set in Zilla Slab should stand out. Avoid
stacking two sizes of Zilla Slab one on top of the other. Pair headings in Zilla
Slab with subheadings in Inter.

You can declare Zilla Slab explicitly with the mixin `@include font-mozilla;`.

Don’t italicize Zilla Slab. Protocol only includes regular and bold versions of
this font.

* [Download from Github](https://github.com/mozilla/zilla-slab/releases/latest)
* [Use on Google Fonts](https://fonts.google.com/specimen/Zilla+Slab)


<figure id="specimen-zilla-slab" class="docs-specimen docs-specimen-font">
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
uses different fonts with a slightly altered scale. Titles set in Zilla Slab for
the Mozilla brand are slightly larger than their Firefox equivalents, adjusting
for Zilla Slab being overall a smaller display font.

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
