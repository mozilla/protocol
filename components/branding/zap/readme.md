The zap is a colorful flourish that can be added to Firefox themed sites to give emphasis to one word, usually in a headline.

For localization purposes the theme class for the zap goes on the parent element and the zap image is applied to any child `<strong>` tags.

Add the class `mzp-has-zap-1`, where the number `1` is the number of the zap you want. There are 18 styles to choose from.

If you want to apply the zap in a different manner, or use a zap that's not one of the default ones you can use the `zap('zap.svg')` Sass mixin.

### Tips
- Zaps cannot break to a new line so they should only appear on one word. Trying to span a zap across more than one word will cause problems if text wraps.
- The zap is flexible! It can be used on words of various lengths and fonts of different sizes.
- Zaps will work best on large text.
- Zaps with a lot of detail don't work as well on short words (they will appear scrunched).

