Just your standard inline text link with no modifiers. Font family, size, weight,
etc are inherited from the parent.

Links can appear in a number of states: unvisited, visited, hovered, active, and
focused.

### Tips

- Keep link text short, just a few words.
- The text in a link should be descriptive of the destination or offer some
  clear indication of where the link leads.
- You can use the `light-links` mixin for dark background where links require
  higher text contrast.
- The `white-links` mixin explicitly sets links to white, for use on dark
  backgrounds in some components (like the [Footer](footer))

### No-nos

- Don’t use “click here” as link text.
- Don‘t use text links (the `<a>` element) to trigger scripted actions unless
  the link also has a real destination in case JavaScript isn’t available. The
  `href` attribute should have a real URL, not `#` or `javascript:void(0)`.
  For script-only actions use a `<button>` element. Buttons do things; links
  go places.
- Don’t use `rel="nofollow"` for internal links
