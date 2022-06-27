---
status: draft
---

[Design tokens](https://medium.com/eightshapes-llc/25dd82d58421) are named entities
that store visual design information. These are used in place of hard-coded values
(such as hex values for color or pixels for spacing) in order to maintain a scalable,
consistent system for UI development.

## Border radii

<table class="docs-tokens-table">
<thead>
  <tr>
    <th class="col-token">Token</th>
    <th class="col-value">Value</th>
    <th class="col-example">Example</th>
  </tr>
</thead>
<tbody>
{{#each borders }}
  <tr>
    <th><code>{{ @key }}</code></th>
    <td><code>{{ this }}</code></td>
    <td><div class="docs-token-border" style="border-radius: {{ this }};"></div></td>
  </tr>
{{/each }}
</tbody>
</table>

## Box shadows

Shadows consist of three layers of different spreads and opacities. The RGBA colors are
equivalent to the tokens `$color-ink-90`, `$color-blue-90`, and `$color-ink-90`.

<table class="docs-tokens-table">
<thead>
    <tr>
        <th class="col-token">Token</th>
        <th class="col-value">Value</th>
        <th class="col-example">Example</th>
    </tr>
</thead>
<tbody>
{{#each shadows }}
    <tr>
        <th><code>{{ @key }}</code></th>
        <td><code>{{ this }}</code></td>
        <td><div class="docs-token-shadow" style="box-shadow: {{ this }};"></div></td>
    </tr>
{{/each }}
</tbody>
</table>

## Spacing units

Protocol has two types of tokens used for spacing units (margins and padding). The `$spacing-*`
tokens are smaller and generally intended for tighter spacing within components. The `$layout-*`
tokens are larger and intended for more generous spaces between components.

<table class="docs-tokens-table">
<thead>
    <tr>
        <th class="col-token">Token</th>
        <th class="col-value">Value</th>
        <th class="col-example">Example</th>
    </tr>
</thead>
<tbody>
{{#each spaces }}
  <tr>
    <th><code>{{ @key }}</code></th>
    <td><code>{{ this }}</code></td>
    <td><div class="docs-token-space" style="height: {{ this }};"></div></td>
  </tr>
{{/each }}
</tbody>
</table>

## Content widths

These are used to set the width of various content containers at different responsive
breakpoints. They’re based on common device screen widths with some allowances for outer
margins between the content and viewport edge.

<table class="docs-tokens-table">
<thead>
    <tr>
        <th class="col-token">Token</th>
        <th class="col-value">Value</th>
        <th></th>
    </tr>
</thead>
<tbody>
{{#each contents }}
<tr>
  <th><code>{{ @key }}</code></th>
  <td><code>{{ this }}</code></td>
  <td></td>
</tr>
{{/each }}
</tbody>
</table>

## Screen widths

These are used in media queries to set breakpoints at which layouts can adjust to
fit different devices and browser windows.

<table class="docs-tokens-table">
<thead>
    <tr>
        <th class="col-token">Token</th>
        <th class="col-value">Value</th>
        <th></th>
    </tr>
</thead>
<tbody>
{{#each screens }}
<tr>
  <th><code>{{ @key }}</code></th>
  <td><code>{{ this }}</code></td>
  <td></td>
</tr>
{{/each }}
</tbody>
</table>

## Media queries

Usage: `@media #{$mq-md} { ... }`

<table class="docs-tokens-table">
<thead>
    <tr>
        <th class="col-token">Token</th>
        <th class="col-value">Value</th>
        <th></th>
    </tr>
</thead>
<tbody>
{{#each queries }}
<tr>
  <th><code>{{ @key }}</code></th>
  <td><code>{{ this }}</code></td>
  <td></td>
</tr>
{{/each }}
</tbody>
</table>

## Font stacks

<table class="docs-tokens-table">
<thead>
    <tr>
        <th class="col-token">Token</th>
        <th class="col-value">Value</th>
        <th></th>
    </tr>
</thead>
<tbody>
{{#each fonts }}
<tr>
  <th><code>{{ @key }}</code></th>
  <td><code>{{ this }}</code></td>
  <td></td>
</tr>
{{/each }}
</tbody>
</table>

The font name "X-LocaleSpecific" can be used as an alias to define an alternative
font for specific languages, especially those with non-Latin alphabets. For example,
in a style sheet served only to pages in Arabic:

```scss
@font-face {
    font-family: X-LocaleSpecific;
    font-weight: normal;
    font-display: swap;
    src: url('/media/fonts/l10n/DroidNaskh-Regular.woff') format('woff');
}
```
