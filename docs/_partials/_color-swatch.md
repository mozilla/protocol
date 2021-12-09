<figure class="docs-swatch">
  <svg class="docs-swatch-image" width="64" height="64">
    <rect fill="{{ value }}" width="100%" height="100%" stroke="#000" stroke-opacity=".1" stroke-width="2" rx="6" ry="6"/>
  </svg>
  <figcaption>
    <h4 class="docs-swatch-name">{{ @key }}</h4>
    <ul class="docs-swatch-values">
      {{#if token}}<li><code class="language-scss">{{ token }}</code></li>{{/if}}
      <li><code class="language-scss">{{ value }}</code></li>
    </ul>
  </figcaption>
</figure>

