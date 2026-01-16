---
title: Migration Guide for v23
label: Migration v23
hidden: true
---

This guide provides automated scripts to help migrate your codebase to Protocol v23. See [CHANGELOG](https://github.com/mozilla/protocol/blob/main/CHANGELOG.md) for full details on what changed.

## Prerequisites

- Back up your code or ensure you can revert changes via git
- Review the changes before committing them
- Run the replacements in [VS Code Find & Replace](#vs-code-find--replace) or [Terminal Commands](#terminal-commands-macoslinux)

## VS Code Find & Replace

Enable regex mode (click the `.*` icon in the search box or press `Alt+R` / `Opt+R`).

### Mixin Renames (SCSS files)

Rename `text-title-*` to `text-heading-*`:

```text
Find:    text-title-(2xs|3xs|xs|sm|md|lg|xl|2xl)
Replace: text-heading-$1
```

Rename `text-display-*` to `text-heading-*` (handle `xxl`/`xxs` → `2xl`/`2xs`):

```text
Find:    text-display-xx([sl])
Replace: text-heading-2x$1
```

```text
Find:    text-display-(xs|sm|md|lg|xl)
Replace: text-heading-$1
```

### Utility Class Renames (HTML/template files)

Rename `mzp-u-title-*` to `mzp-u-heading-*`:

```text
Find:    mzp-u-title-(2xs|3xs|xs|sm|md|lg|xl|2xl)
Replace: mzp-u-heading-$1
```

### CSS Variable Renames (SCSS files)

Font family and line-height variables:

```text
Find:    --title-font-family
Replace: --theme-heading-font-family
```

```text
Find:    --body-font-family
Replace: --theme-body-font-family
```

```text
Find:    --body-line-height
Replace: --theme-body-line-height
```

Size variables (note: property name moves in the new pattern):

```text
Find:    --title-(2xs|3xs|xs|sm|md|lg|xl|2xl)-size
Replace: --theme-heading-font-size-$1
```

```text
Find:    --body-(xs|sm|md|lg|xl)-size
Replace: --theme-body-font-size-$1
```

Line-height variables:

```text
Find:    --title-(2xs|3xs|xs|sm|md|lg|xl|2xl)-line-height
Replace: --theme-heading-line-height-$1
```

### Sass Variable Replacements (SCSS files)

```text
Find:    \$title-font-family
Replace: var(--theme-heading-font-family)
```

```text
Find:    \$body-font-family
Replace: var(--theme-body-font-family)
```

```text
Find:    \$button-font-family
Replace: var(--theme-button-font-family)
```

```text
Find:    \$body-line-height
Replace: var(--theme-body-line-height)
```

Size and line-height variables (use regex mode):

```text
Find:    \$title-(2xs|3xs|xs|sm|md|lg|xl|2xl)-size
Replace: var(--theme-heading-font-size-$1)
```

```text
Find:    \$title-(2xs|3xs|xs|sm|md|lg|xl|2xl)-line-height
Replace: var(--theme-heading-line-height-$1)
```

```text
Find:    \$body-(xs|sm|md|lg|xl)-size
Replace: var(--theme-body-font-size-$1)
```

Legacy aliases:

```text
Find:    \$text-body-line-height
Replace: var(--theme-body-line-height)
```

```text
Find:    \$text-title-line-height
Replace: var(--theme-heading-line-height)
```

```text
Find:    \$text-display-line-height
Replace: var(--theme-heading-line-height)
```

### Remove @supports Blocks (SCSS files)

If you have `@supports` blocks that only contain font declarations, you can remove them. Search for these manually:

```text
Find:    @supports \(--css: variables\)
```

Review each match and remove the block if it only contains font-family, font-size, or line-height declarations.

## Terminal Commands (macOS/Linux)

Run these from your project root. **Preview changes first** by removing the `-i ''` flag (macOS) or `-i` flag (Linux) to see what would change.

### Mixin Renames

```bash
# Rename text-title-* to text-heading-* in SCSS files
find . -name "*.scss" -exec sed -i '' 's/text-title-/text-heading-/g' {} +

# Rename text-display-* to text-heading-* (handle xxl/xxs first)
find . -name "*.scss" -exec sed -i '' 's/text-display-xxl/text-heading-2xl/g' {} +
find . -name "*.scss" -exec sed -i '' 's/text-display-xxs/text-heading-2xs/g' {} +
find . -name "*.scss" -exec sed -i '' 's/text-display-/text-heading-/g' {} +
```

### Utility Class Renames

```bash
# Rename mzp-u-title-* to mzp-u-heading-* in HTML files
find . -name "*.html" -exec sed -i '' 's/mzp-u-title-/mzp-u-heading-/g' {} +

# Also check Nunjucks templates
find . -name "*.njk" -exec sed -i '' 's/mzp-u-title-/mzp-u-heading-/g' {} +
```

### CSS Variable Renames

```bash
# Font family and line-height
find . -name "*.scss" -exec sed -i '' 's/--title-font-family/--theme-heading-font-family/g' {} +
find . -name "*.scss" -exec sed -i '' 's/--body-font-family/--theme-body-font-family/g' {} +
find . -name "*.scss" -exec sed -i '' 's/--body-line-height/--theme-body-line-height/g' {} +

# Size variables (these use extended regex for the capture group)
find . -name "*.scss" -exec sed -i '' -E 's/--title-(2xs|3xs|xs|sm|md|lg|xl|2xl)-size/--theme-heading-font-size-\1/g' {} +
find . -name "*.scss" -exec sed -i '' -E 's/--body-(xs|sm|md|lg|xl)-size/--theme-body-font-size-\1/g' {} +

# Line-height variables
find . -name "*.scss" -exec sed -i '' -E 's/--title-(2xs|3xs|xs|sm|md|lg|xl|2xl)-line-height/--theme-heading-line-height-\1/g' {} +
```

### Sass Variable Replacements

```bash
# Replace Sass variables with CSS custom properties
find . -name "*.scss" -exec sed -i '' 's/\$title-font-family/var(--theme-heading-font-family)/g' {} +
find . -name "*.scss" -exec sed -i '' 's/\$body-font-family/var(--theme-body-font-family)/g' {} +
find . -name "*.scss" -exec sed -i '' 's/\$button-font-family/var(--theme-button-font-family)/g' {} +
find . -name "*.scss" -exec sed -i '' 's/\$body-line-height/var(--theme-body-line-height)/g' {} +

# Size and line-height variables (extended regex)
find . -name "*.scss" -exec sed -i '' -E 's/\$title-(2xs|3xs|xs|sm|md|lg|xl|2xl)-size/var(--theme-heading-font-size-\1)/g' {} +
find . -name "*.scss" -exec sed -i '' -E 's/\$title-(2xs|3xs|xs|sm|md|lg|xl|2xl)-line-height/var(--theme-heading-line-height-\1)/g' {} +
find . -name "*.scss" -exec sed -i '' -E 's/\$body-(xs|sm|md|lg|xl)-size/var(--theme-body-font-size-\1)/g' {} +

# Legacy aliases
find . -name "*.scss" -exec sed -i '' 's/\$text-body-line-height/var(--theme-body-line-height)/g' {} +
find . -name "*.scss" -exec sed -i '' 's/\$text-title-line-height/var(--theme-heading-line-height)/g' {} +
find . -name "*.scss" -exec sed -i '' 's/\$text-display-line-height/var(--theme-heading-line-height)/g' {} +
```

## Linux Users

Replace `-i ''` with `-i` in the sed commands above:

```bash
# macOS:
sed -i '' 's/old/new/g' file

# Linux:
sed -i 's/old/new/g' file
```

## Split Component

### Removed Pop Classes

The following classes have been removed from the Split component:
- `mzp-l-split-pop-top`
- `mzp-l-split-pop-bottom`
- `mzp-l-split-pop`

**Migration steps:**
1. Remove these classes from your HTML/templates
2. If you need similar visual effects, implement custom CSS using negative margins

**Find usages in your codebase:**

VS Code Find:
```text
Find: mzp-l-split-pop(-top|-bottom)?
```

Terminal:
```bash
grep -r "mzp-l-split-pop" --include="*.html" --include="*.njk" .
```

### Removed Media Sizing Classes

The following classes have been removed from the Split component:
- `mzp-l-split-media-overflow`
- `mzp-l-split-media-constrain-height`

**Migration steps:**
1. Remove these classes from your HTML/templates
2. If you need similar visual effects, implement custom CSS for media sizing

**Find usages in your codebase:**

VS Code Find:
```text
Find: mzp-l-split-media-(overflow|constrain-height)
```

Terminal:
```bash
grep -r "mzp-l-split-media-overflow\|mzp-l-split-media-constrain-height" --include="*.html" --include="*.njk" .
```

## After Migration

1. Run your build to check for any Sass compilation errors
2. Run visual regression tests if available
3. Manually review any remaining uses of removed variables or mixins
4. Test in a browser to verify typography appears correct
