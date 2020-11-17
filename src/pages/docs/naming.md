---
title: Naming Convention
order: 2
---

For ease of integration and to avoid conflicts with other sites, frameworks,
and libraries, most classes in Protocol are prefixed with our global namespace
`.mzp-` for “Mozilla Protocol”.

After that, we follow a [SMACSS](https://smacss.com/book/categorizing)-based
naming convention with a set of prefixes to put rules into a few different
categories:

<ul class="mzp-u-list-styled">
    <li>`c-` for component names. Expect a lot of this one, e.g. `.mzp-c-card`, `.mzp-c-button`.</li>
    <li>`t-` for theme styles, when a component has one or more alternative styles, e.g. `.mzp-t-dark`, `.mzp-t-firefox`.</li>
    <li>`l-` for layout-related styles, e.g. `.mzp-l-grid-half`, `.mzp-l-grid-third`. These are presentational so should be rare. Prefer mixins.</li>
    <li>`u-` for utility styles, which have a broad scope and can be powerful overrides, e.g. `.mzp-u-inline`, `.mzp-u-no-margin`. These are presentational so should be rare. Prefer mixins.</li>
    <li>`qa-` used as selector hooks for tests (unit tests, integration tests, etc.). These classes are not meant as styling hooks; no CSS should be applied to any `qa-` classes!</li>
    <li>`is-` to indicate a current state, e.g. `.mzp-is-active`, `.mzp-is-collapsed` (typically assigned by JS and not hard-coded).</li>
    <li>`has-` to indicate that a component contains some other component, when the parent gets some styling to accommodate the child, e.g. `.mzp-has-submenu`, `.mzp-has-image`.</li>
    <li>`js-` used as a behavior hook for JavaScript, e.g. `.mzp-js-sticky`, `.mzp-js-collapsible`, `.mzp-js-toggle`. Indicates potential for a change of state and usually shouldn’t have any styling.</li>
    <li>`a-` for a CSS animation names, e.g. `mzp-a-fade-in`, `mzp-a-fade-out`.</li>
</ul>

Our names are all lowercase and hyphen-separated or “kebab-case,” e.g.
`.mzp-c-card`, `.mzp-c-card-title`. This brings with it the potential for
long kebabs of multipart, hyphenated names. Names should be as short as
possible and as long as necessary. Clarity is key. If we find our names
getting obscenely long and confusing we may need to revise our convention
but we’re trying it this way first.

Example:

```markup
<div class="mzp-c-card mzp-has-image">
  <img class="mzp-c-card-image" src="/static/img/card-image.jpg" alt="">
  <h3 class="mzp-c-card-title">Card Title</h3>

  <div class="mzp-c-card-desc">
    <p>Lorem ipsum dolor sit amet, pri illum munere mollis at, amet senserit te vix, sint porro mei eu.</p>
  </div>

  <p class="mzp-c-card-cta"><a class="mzp-c-cta-link" href="#">Learn more</a></p>
</div>
```

Component names should be semantically meaningful, descriptive of the element's content,
purpose, or function, not only its presentation.

```scss
// NO - Presentational
.mzp-c-outline { ... }
.mzp-c-button-blue { ... }

// YES - Meaningful
.mzp-c-card { ... }
.mzp-c-button-download { ... }
```

Notable exceptions are the handful of layout and utility classes (prefixed
by `l-` and `u-`) which you should only use when necessary and practical.
In most cases there will be an equivalent SCSS mixin that may be preferable to
adding presentational classes in your markup.

### Sizes

We use a "T-shirt" convention when we need to describe sizes, e.g. "lg" for large
and "sm" for small. In this t-shirt scale system, the default should be the medium
"md" size and you can scale up or down from there.

```scss
.mzp-t-size-2xl { ... }
.mzp-t-size-xl { ... }
.mzp-t-size-lg { ... }
.mzp-t-size-md { ... }
.mzp-t-size-sm { ... }
.mzp-t-size-xs { ... }
.mzp-t-size-2xs { ... }
```

Note that when we need mulitple Xes we opt for a numeral. This avoids confusion or
ambuguity in the event we need to reference some extreme size. "5xl" looks better
than "xxxxxl".


### Resources

* [Scalable and Modular Architechture for CSS (SMACSS) - Jonathan Snook](https://smacss.com/book/)
* [CSS Architecture for Design Systems - Brad Frost](http://bradfrost.com/blog/post/css-architecture-for-design-systems/)
