---
status: draft
---

Colors are defined as named tokens so they can be consistent throughout Protocol. When using these colors in CSS, use the token rather than the hex value. Avoid using colors outside this palette unless you have a good reason.

{{#each palettes}}
  <h2 class="docs-palette-title">{{ @key }}</h2>
  <section class="docs-swatch-gallery">
  {{#each colors}}
  {{> @color-swatch }}
  {{/each}}
  </section>
{{/each}}
