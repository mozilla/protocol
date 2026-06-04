# Repository Guidelines

## Project Structure & Module Organization

Protocol is Mozilla's design system, published to npm as `@mozilla-protocol/core`. It is **not an application** — it is a CSS framework + a library of HTML component patterns + a small amount of JavaScript, plus a Fractal-powered documentation site that doubles as the development environment. Most work is authoring Sass and Nunjucks templates, not application logic. Node 20 (`.nvmrc`); `engines` requires >=16.

A single component is spread across **three parallel trees**, by file type, that you edit together:

| Concern | Location | Notes |
|---|---|---|
| Markup | `components/<name>/<name>.html` | Nunjucks template (`.html` ext). Optional `<name>.config.yml` (variants + context data) and `readme.md`. Variant files use `<name>--<variant>.html`. |
| Styles | `assets/sass/protocol/components/_<name>.scss` | One partial per component. |
| Behavior | `assets/js/protocol/<name>.js` | Only the interactive components have JS. |

`assets/` is the **only directory published to npm** — it holds the source Sass, JS, and fonts. `components/`, `docs/`, `static/`, and `theme/` exist for the documentation site, not the shipped package.

**Sass framework (`assets/sass/protocol/`):**
- `protocol.scss` and `protocol-components.scss` are the two compiled entry points (the bundled CSS files consumers can use without compiling). `protocol.scss` is a deliberately minimal "every page" set; `protocol-components.scss` `@use`s *every* component. Consumers are encouraged to compile their own subset instead.
- **Every component partial starts with `@use '../includes/lib' as *;`** — this is the convention. `_lib.scss` forwards config + tokens + functions + mixins, making `$color-*`, `$spacing-*`, `text-heading-*` etc. available. Don't hard-code values that have a token or mixin.
- `includes/_config.scss` holds user-overridable globals (`$brand-theme`, `$type-scale`, `$image-path`, `$font-path`) — all `!default`, meant to be overridden *before* the lib import in a consumer's stylesheet.
- Design **tokens come from an external package** (`@mozilla-protocol/tokens`, separate repo `mozilla/protocol-tokens`), surfaced via `includes/_tokens.scss`.
- `base/` = bare HTML element styles + utilities; `components/` = per-component styles; `includes/` = config, tokens, functions, mixins, fonts, themes; `templates/` = layout styles.

**Theming:** Two brands — **Mozilla** (default) and **Firefox**. Themes are CSS Custom Properties declared on `:root` in `includes/themes/` (`_mozilla.scss`, `_firefox.scss`). For any themeable property (foreground/background/link colors, heading & body font families) use `var(--...)` (e.g. `var(--background-color)`, `var(--theme-heading-text-color)`). **Exception: text sizing** — use the type-scale mixins (`@include text-heading-lg;`), never custom properties, because the mixins bake in responsive media queries.

**JavaScript:** Plain ES (target IE10 via Babel in tests), `module.exports`, no framework. Each module is an object named `Mzp<Thing>` (e.g. `MzpDetails`, `MzpModal`) exposing `init()`/`destroy()` and exported as a **UMD global** named in `webpack.entrypoints.js`. Modules feature-detect via `MzpSupports` and lean on `MzpUtils` helpers.

## Build, Test, and Development Commands

```bash
npm install              # install dependencies (Node 20)

# Local development (two terminals):
npm run webpack          # terminal 1: compile Sass + assets, then watch & recompile
npm start                # terminal 2: Fractal dev server at http://localhost:3000

npm run lint             # both linters (runs in CI / before build & test)
npm run lint-css         # stylelint on **/*.scss
npm run lint-js          # eslint on .

npm test                 # lint, build test bundle, run Jasmine specs in Firefox AND Chrome
npm run test-build       # just rebuild the test bundle (webpack -> tests/dist/)

npm run build-docs       # build the documentation site -> dist/ (Netlify deploys this)
npm run build-package    # build the publishable npm package -> package/
```

**Markdown docs caveat:** Sass and component `.html` files hot-reload, but `docs/*.md` pages are only processed at Fractal startup — restart `npm start` to see doc changes.

## Coding Style & Naming Conventions

**CSS class naming** (SMACSS-based, all `mzp-` namespaced, kebab-case) — see `docs/03-contributing/02-naming.md`:
- `mzp-c-` component · `mzp-t-` theme/variant · `mzp-l-` layout · `mzp-u-` utility (prefer mixins over these) · `mzp-is-`/`mzp-has-` state · `mzp-js-` JS hook (no styling) · `mzp-qa-` test hook (**never** style these) · `mzp-a-` animation name.
- Names are semantic, not presentational (`mzp-c-button-product`, not `mzp-c-button-blue`).
- Sizes use a t-shirt scale; default is `md`; multi-X sizes use numerals (`2xl`, not `xxl`).

**Sass style** (stylelint `stylelint-config-standard-scss` + custom rules in `.stylelintrc.json`; full guide in `docs/03-contributing/03-css-guide.md`):
- 4-space indent, single quotes, `//` comments (stripped on compile; `/* */` survives — use it only for `stylelint-disable`).
- **Declarations ordered alphabetically.** Minimal nesting (`max-nesting-depth: 5`); parent declarations before nested rules; blank line before each nested rule. `!important` is disallowed by lint. Legacy color-function notation; omit leading zeros (`.75em`); rems for `font-size`; unitless `line-height`; `ms` for timing.

**JavaScript** (`eslint.config.js`): 4-space indent, single quotes, semicolons, `const`/`let` (no `var`), `===`, camelCase, `no-console`.

## Testing Guidelines

`npm test` lints, builds the test bundle, and runs the Jasmine specs in **both Firefox and Chrome** — those browsers must be installed. The config (`tests/jasmine-browser.json`) globs all specs from `tests/dist/test.js`, which webpack bundles from `tests/unit/**/*.js` (`webpack.test.config.js`).

**Running a single test:** there is no built-in single-file filter — to run one spec file in isolation, temporarily narrow the `entry` glob in `webpack.test.config.js`, then run `npm run test-build` and `npx jasmine-browser-runner runSpecs --config=tests/jasmine-browser.json`.

## Commit & Pull Request Guidelines

Keep commit titles short and imperative; reference an issue or PR number when available (e.g. `Add $mq-max token`, `Refactor spacing to use CSS custom properties (#982)`). Update `CHANGELOG.md` for any user-facing change to the framework.


## LLM assistance

* When committing code, do not list the LLM as a co-author — it is a tool, not a developer. All code committed is the responsibility of the human developer using the LLM. This is in line with <https://firefox-source-docs.mozilla.org/contributing/ai-coding.html>
