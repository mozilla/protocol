---
title: CSS Coding Guide
order: 4
---

Coding style can be really personal and everyone has their own opinions
and preferences. But when we work as a team on a shared codebase it's
invaluable to agree to some basic rules. The CSS in Protocol should be
written consistently no matter who wrote it.


## Terminology

Just so we all know what we’re talking about, a CSS *rule* comprises one
or more *selectors* followed by a *declaration block* consisting of one
or more *declarations*. A declaration comprises a *property* and a *value*
(some properties accept multiple values).

A rule in CSS looks like:

```css
selector {
    property: value;
}```


## Simple selectors

Use the shortest, least specific selector required to do the job.

Favor classes over IDs. IDs in CSS aren’t expressly forbidden, just
strongly discouraged. Using ID selectors can lead to specificity wars
requiring ever more powerful selectors to override previous styling. A
better option is an attribute selector like `[id='widget']` which selects
the element by its ID but has the same specificity as a class. Everybody
wins.

Avoid qualifying classes with type selectors. It slows down performance
and makes classes less portable. E.g. `.widget` is better than `div.widget`.


### Minimal nesting

We use SCSS as a pre-processor. Nested rules are converted into descendent
selectors in the generated style sheet. The deeper the nesting, the more
complex and specific the final selector will be. Don’t nest rules unless
necessary for context and specificity, and don’t nest rules just to group
them together (use comments to label sections of the style sheet for grouping).

All the declarations for the parent element should come before the nested
rules. Include a blank line before each nested rule to separate it from the
rule or declaration above it.

```scss
// NO - This is horrible
.widget-container {
    float: right;
    .widgets {
        .widget-foo {
            background: #ccc;
            h3 {
                color: red;
            }
            padding: 10px;
        }
    }
    width: 30%;
}

// YES - Clean and simple
.widget-container {
    float: right;
    width: 30%;
}

.widget-foo {
    background: #ccc;
    padding: 10px;

    h3 {
        color: red;
    }
}```


## Format

<ul class="mzp-u-list-styled">
    <li>One selector per line.</li>
    <li>One declaration per line.</li>
    <li>Order declarations alphabetically (from A to Z).</li>
    <li>Use a soft indent of four spaces - don’t use tabs.</li>
    <li>Use one space between the selector and the first bracket.</li>
    <li>Use one space between property and value after `:`.</li>
    <li>Always add a semicolon after property value.</li>
    <li>Use single quotes.</li>
    <li>Do not specify units for a zero value.</li>
    <li>Omit the leading zero in decimal values, e.g. `.75em` not `0.75em`.</li>
    <li>Include a space after each comma in a comma-separated property list.</li>
    <li>User lowercase and shorthand hex values, e.g. `#aaa`.</li>
    <li>Always use hex values unless you are declaring rgba.</li>
    <li>Separate each rule by a blank line.</li>
    <li>Use `//` for comment blocks (instead of `/* */`).</li>
</ul>

```scss
.selector1,
.selector2 {
    // This is a comment
    background: #333 url('img/icon.png') center no-repeat;
    color: #bada55;
    margin: 0 auto .75em;
}

.selector-a,
.selector-b {
    background: rgba(255, 255, 255, .25);
    padding: 20px;
}
```

When possible, limit line lengths to 80 characters. It improves readability,
minimizes horizontal scrolling, makes it possible to view files side by side,
and produces more useful diffs with meaningful line numbers. There will be
exceptions such as long URLs or gradient syntax but most declarations should
fit well within 80 characters even with indentation.

Long, comma-separated property values – such as multiple background images,
gradients, transforms, transitions, webfonts, or text and box shadows – can
be arranged across multiple lines (indented one level from their property).

```scss
.selector {
    background-image:
        linear-gradient(#fff, #ccc),
        linear-gradient(#f3c, #4ec);
    box-shadow:
        1px 1px 1px #000,
        2px 2px 1px 1px #ccc inset;
    transition:
        border-color 500ms ease-in,
        opacity 100ms ease-in;
}
```

### Units

<ul class="mzp-u-list-styled">
    <li>Use pixels for fixed-width elements.</li>
    <li>Use percentages for fluid-width elements.</li>
    <li>Use rems for `font-size` because it respects user preferences.</li>
    <li>Use [unitless `line-height`](http://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/)
        in conjunction with `font-size`; it acts as a multiplier of font size.
        E.g. `line-height: 1.5`.</li>
    <li>Use milliseconds for timing, e.g. `500ms` not `.5s`.</li>
</ul>


