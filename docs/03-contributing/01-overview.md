---
title: Contributing to Protocol
label: Overview
---

Protocol, like everything else Mozilla makes, is [open source](https://developer.mozilla.org/docs/Mozilla/Developer_guide/Introduction).
We welcome contributions from people like you. Yes, you, whoever you are
reading this, can do something to make Protocol better and more useful,
no matter your skill level or area of interest.

### Reporting Bugs

The easiest way to help is to report bugs. Let us know if something isn't
doing what you think it should do and we can try to fix it.

To report an error you’ve discovered in Protocol, [submit an issue on Github](https://github.com/mozilla/protocol/issues/new/choose/)
with a detailed description of the error and steps to reproduce. If possible,
include a link to a live example and/or a screenshot of the bug in effect.
Also be sure to mention the browser (and version) and operating system.

You should search for similar issues in case it’s already been reported. In
some cases a bug may have been fixed but the fix may not have been deployed,
so it’s a good idea to search through [recently closed issues](https://github.com/mozilla/protocol/issues?q=is%3Aissue+is%3Aclosed) as well.

### Requesting New Features

If you would like to request changes to a component or a new component be
added to Protocol, please [submit an issue on Github](https://github.com/mozilla/protocol/issues/new/choose/)
using the appropriate issue template. Please try to fill out this template
as thoroughly as you can. This will help the team understand the request
and triage issues more effectively.

## Contributing code

Aside from reporting bugs or requesting features, an even more direct way to
contribute to Protocol is to write code.

Protocol is a design system, though the exact meaning of the term “design system” is
hard to pin down. For our purposes, a design system comprises the entirety of
guidelines, assets, and resources for producing websites in a specific style or
brand identity. It includes a style guide, a pattern library of coded components,
and the actual assets – fonts, graphics, CSS frameworks, JavaScript libraries –
needed to create websites.

The heart of Protocol is the pattern library – the HTML components that you can
assemble into a web page, and its soul is the CSS framework that styles those
components. We’re probably straining that metaphor but you get the point;
Protocol is made of code.

The Protocol design system comprises a CSS framework and a library of
markup patterns for web page components. There's a bit of JavaScript for a few
interactive things, but for the most part Protocol is static HTML and CSS.

The pattern library lives at [protocol.mozilla.org](https://protocol.mozilla.org)
and its source code lives at [github.com/mozilla/protocol](https://github.com/mozilla/protocol/).
That code repository is also where the Protocol CSS framework lives, as well as
all the system documentation (including this page).

To write code for Protocol you'll actually be working on the Protocol website itself.


### Installing the Protocol site locally

We've done our best to make the barrier of entry to contributing code to
Protocol as low as possible. You can do some work directly through github
without actually installing Protocol locally, but if you want to do any complex
coding you'll need to set up a local development environment.

* You'll need a GitHub account.
    * [https://github.com/join](https://github.com/join)
    * [https://help.github.com/articles/set-up-git/](https://help.github.com/articles/set-up-git/)
* You'll need to install Git.
    * [https://git-scm.com/downloads](https://git-scm.com/downloads)
    * [https://git-scm.com/book/en/v2/Getting-Started-Installing-Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
* You'll need to install Node and npm.
    * [https://docs.npmjs.com/downloading-and-installing-node-js-and-npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

With those prerequisites met:

1. Fork the [Protocol GitHub repository](https://github.com/mozilla/protocol/) to your personal account.
    * https://help.github.com/articles/fork-a-repo/
2. Clone that remote repo to your computer.
    * https://help.github.com/articles/cloning-a-repository/
3. On your computer’s command line, navigate to the folder to which you just cloned the Protocol repo.
4. Within that folder, run `npm start`. This will install all the dependencies and launch a local server.

You now have a local instance of the Protocol site running on your
computer. You can load the site in a browser at http://localhost:3000.
As you edit files they will update automatically and you can see your
changes "live" on your local development environment.

The pattern library uses [Gulp](https://gulpjs.com/) to automate tasks.
The `npm start` command is a shortcut to installing and starting up the
site the first time, but you may not want to rerun the installation process
every time you sit down to work on Protocol. Once you’ve got it installed
you can skip the installation step and run `gulp` directly to build the
site and start the server, or `gulp --dev` to start the server with file
watching (so it rebuilds and refreshes automatically with every file change).

1. Make whatever edits you need to make, ideally in a fresh branch.
    * https://git-scm.com/book/en/Git-Branching-Basic-Branching-and-Merging
    * https://help.github.com/articles/creating-and-deleting-branches-within-your-repository/
2. When you're done, commit your changes and push them to your GitHub remote repository.
    * https://help.github.com/articles/pushing-to-a-remote/
3. Submit a pull request from your fork to the Mozilla repo.
    * https://help.github.com/articles/creating-a-pull-request-from-a-fork/

You can also [make some edits directly on github.com](https://help.github.com/en/articles/editing-files-in-another-users-repository)
without installing the site locally. For that you don't even have to install
Git or Node, you just need a GitHub account. This is fine for updating docs or
minor tweaks that don’t need extensive testing or review, but for any serious
coding you really should have a local instance running so you can see your work
as it progresses.

### File structure

Once you’ve cloned the Protocol repository, you should spend some time
browsing through the folders in your local copy (or on Github) to
familiarize yourself with the general structure of the project. You’ll
have to drill down a bit to reach the really good stuff but the top-level
root folder looks something like:

```text
protocol
├── bin (scripts that deploy the site to the server)
├── dist (where source files are built locally for serving [not found in git])
├── docs (documentation for Drizzle, the tool that drives the Protocol site)
├── gulpfile.js (scripts that build and process the pattern library and CSS framework)
├── src (the real source of the site; this is the meat of Protocol)
└── tests (automated test scripts)
```

There are a few other files in the project root, most of which are pretty
boring, but the most interesting is `CHANGELOG.md` that contains a historical
record of Protocol.

The real meat of Protocol is in the `src` folder, and this is where you’ll do
most of your work.

```text
src
├── assets (fonts, images, scripts, and styles)
├── data (reference data used for examples)
├── pages (content that supplements the pattern library such as demos and documents [including this one])
├── patterns (the HTML components)
├── static (media assets for display on the pattern library site, but not part of Protocol itself)
└── templates (templates for the pattern library website)
```

At this level the most interesting folders are probably `patterns` and `assets`,
where the aforementioned heart and soul of Protocol can be found, respectively.
Let’s start with `patterns`.

We’ve chosen to organize our pattern library following the atomic design metaphor,
which consists of breaking a web page down into its smallest component parts,
which can then be combined and assembled in different configurations, adding
more parts in increasing complexity to arrive at the complete page. In our
`patterns` folder you’ll find separate folders for `atoms`, `molecules`, `organisms`,
and `templates`.

The files in these folders represent the actual Protocol components. They’re
snippets of HTML that, when combined with the CSS that styles them, can be assembled
to build a web page. All of the Protocol components can be found in the `patterns`
folder, and all of the related CSS is in `assets` (we’ll do a deeper dive into that folder
shortly).

## Component patterns

The component pattern examples are built with [Handlebars](https://handlebarsjs.com/guide/),
a simple templating language that is mostly plain HTML with some added enhancements.
Each component resides in its own Handlebars template file (using the extension `.hbs`),
which includes a bit of front matter in a YAML format along with the component
markup. All of this is processed into plain HTML and rendered to show a live
example of the component alongside the component markup and the front matter
for added documentation.

Here’s a minimal example of a Protocol component in Handlebars format:

```hbs
---
name: Button
description: |
  This is an example of a button.
---

<button class="mzp-c-button">Button</button>
```

The top section between the `---` is the _front matter_, comprising at minimum
a name but it can also include a description, links to examples or resources,
notes, tips, no-nos (what not to do), component status, and sorting order.

Below the front matter is the component markup, just a simple button in this case.
When the website is built, these Handlebars templates are rendered into formatted web
pages. Each pattern displays the rendered and styled component, the HTML snippet
that produces it, and the front matter notes that document it. Browse around the
Protocol site to see this for yourself.

Handlebars does a bit more than plain HTML. Every component pattern becomes a
reusable object that can be embedded into another Handlebars template as a _partial_:
helper:

```hbs
\{{> patterns.atoms.button}}
```

For more complex cases, we can also define patterns with content _blocks_ allowing
us to pass content into the pattern with the `\{{#embed}}` helper. For example, our
button might contain a block called `label`:

```hbs
<button class="mzp-c-button">
\{{#block "label"}}
  Button
\{{/block}}
</button>
```

When we embed that pattern in another template we can replace the block with
different content:

```hbs
\{{#embed "patterns.atoms.button"}}
  \{{#content "label"}}Click Me!\{{/content}}
\{{/embed}}
```

Each component occupies its own folder and some folders contain multiple
components as a collection. The site automatically concatenates all the templates
within a folder into a single page during the build process. A component folder
can optionally contain a `collection.yaml` file with metadata about the collection.

This is obviously an abbreviated introduction to our Handlebars components but
hopefully it will help you get started. Look through the various patterns in Protocol
for more robust examples and refer to the [Handlebars documentation](https://handlebarsjs.com/guide/)
to learn more about how it works.

## The Protocol CSS framework

Along with the HTML snippets that give Protocol components their structure,
Protocol also comprises a CSS framework to give it style. Our framework is built
with [Sass](https://sass-lang.com) as a pre-processor, and we author Sass using
the [SCSS](https://sass-lang.com/documentation/syntax#scss) syntax.

You can find our Sass files in the `assets/sass` folder. The `demos` and `docs` subfolders
contain styles for Protocol demo pages and the Protocol website, respectively, but the
real Protocol framework is in the `protocol` folder. This is where you’ll find all the
CSS that styles Protocol components as well as the variables, mixins, and functions
that make it all possible.

```
sass/protocol
├── base
│   ├── elements
│   ├── includes
│   └── utilities
├── components
├── includes
│   ├── fonts
│   ├── forms
│   ├── mixins
│   ├── _functions.scss
│   ├── _themes.css
│   └── _lib.scss
├── _theme-config.scss
├── protocol-components.scss
└── protocol.scss
```

As usual, it’s a good idea to explore the files and folders here to get the lay of
the land. We try to include helpful comments in each .scss file to explain what all
the different pieces do and how to use them so a lot of our documentation lives
directly within the source code.

Our styles are fragmented across numerous files in order to keep things more
self-contained and organized, and to help prevent conflicts when several people
work simultaneously on different things (when more than one person is trying to
edit the same file at the same time they’ll inevitably step on each other’s work).

The `base` folder has all the basic, general-purpose styling for common HTML elements.
The `components` folder holds the styling for individual Protocol components. And
the `includes` folder holds the supporting mixins and functions that power the entire
framework. Each of these folders in turn hold other files that import and collect the
smaller fragments. Almost all of our individual SCSS files are [Sass partials](https://sass-lang.com/guide#topic-4),
prefixed with an underscore. They’re intended to be imported into another file when
the Sass is compiled; they don’t all turn into separate CSS files of their own.

## Styling a component

All of the styling for a given component will typically be in a single `.scss` file
named for that component. Here’s a bare-bones example that we’ll imagine is a file
named `_item.scss` (this is not an actual Protocol component):

```scss
@import '../includes/lib';

.mzp-c-item {
    @include text-title-md;
    color: $color-ink-80;
    margin: $spacing-lg 0;
}
```
Even in this minimal example there’s a lot happening, and almost none of it is plain
CSS. If you’re familiar with Sass/SCSS already this will look more familiar, but if
you’re not let’s dig a bit deeper.

```scss
@import '../includes/lib';
```
First, we import the Protocol library file, `includes/_lib.scss`. Since that file
is a Sass partial we don’t need the underscore prefix or the file extension, just
referencing the relative path and filename is enough. That library file in turn
imports all of the functions, mixins, and variables Protocol needs to process the
rest of this SCSS file. Almost every file you see in the Protocol framework will
import that library at the very top.

```scss
.mzp-c-item {
```
Next we get to the proper component styles, starting with a class selector. All of
our classes follow a [standard naming convention](/docs/naming-convention.html).
They’re namespaced with `mzp` to avoid conflicts with any other styling or libraries
with which they may need to coexist, followed by a `c` prefix indicating that this
is a component.

```scss
    @include text-title-md;
```
The first style declaration is a Sass mixin that sets the font-size for the element.
We use mixins for font sizes to maintain a standardized type scale, and the mixins
also include media queries to make the sizes responsive to the viewport size; bigger
screens get bigger text. These sizing mixins are defined in `includes/mixins/_typography.scss`.
See [our page on typography](/fundamentals/typography.html) for more about our type scale.

Next we declare the text color using a variable. Protocol has an extensive color
palette, all assigned to named variables so every occurance of a given color will
always be the exact same value (`$color-ink-80` is a dark purplish black). You can
see [our entire color palette](/fundamentals/color.html) for all the different options.

```scss
    margin: $spacing-lg 0;
```
The next line sets margins above and below the element, once again using a named
variable instead of an explicit value. Assigning variables to spacing units means
we ensure consistency throughout the system, and also lets us change the value of
such a variable in one place and it will automatically propagate to every other part
of Protocol. The `$spacing-lg` variable is `24px` but if we want to change that to
`20px` we would only have to make that change once.

### Tokens

The example above shows a Sass variable used as a margin value. We call variables
like these _design tokens_ and they’re more than just variables. Design tokens are
a way to document the lowest level design attributes and share them throughout a
complex system, and even across multiple systems. We use tokens as much as possible
in place of hard-coded values, especially for colors and units of measure. Whenever
you need a basic value in CSS, see if there’s already a token for it. You can see
[a list of all the design tokens in Protocol](/fundamentals/tokens.html).

Tokens are also a partial abstraction of the value they represent. Assigning a name
to a token also implies a particular purpose a step removed from its specific value.
A token like `$spacing-md` represents "a medium unit of space" and we don't necessarily
need to think about exactly how many pixels that is, we only know it's a bit larger
than small and a bit smaller than large. For now we've decided that a medium space is
`16px`, but that could easily change to `12px` or `20px` because "medium" is relative.
Avoid misusing a token as an alias for its specific value since the whole point is
that the value can change.

Also avoid misusing a token to fill in a value for something it wasn't made for. For
example, the token `$spacing-md` is intended for spacing within or between elements.
Don't use it set the height of an image or width of a border or size of a font (unless
there's a very good reason to do so).

(Side note: The `$spacing-*` tokens are smaller units, mostly for interior spacing
inside components or between close elements. The `$layout-*` tokens are larger,
intended for wider gaps between components on the page.)

Protocol's design tokens [reside in their own repository](https://github.com/mozilla/protocol-tokens)
and are [published as their own package](https://www.npmjs.com/package/@mozilla-protocol/tokens).

### Mixins

Protocol relies on numerous [Sass mixins](https://sass-lang.com/documentation/at-rules/mixin)
to simplify and standardize repetitive code. Some are fairly simple shortcuts and
others do more complex work. We won’t list them all here, but we’ll describe a few
of the more notable ones. All our mixins are in `/includes/_mixins.scss` or in
separate files in the `/includes/mixins/` folder. You’ll find even more documentation
as comments directly in the source files.

#### Text sizes
Protocol uses a modular type scale with a range of predefined font sizes, and to
maintain the consistency of that scale we rely on mixins for all of our text sizing.
See [our page on typography](/fundamentals/typography.html) for more info and examples.

```scss
@include text-title-lg;
```

Different themes have slightly different type scales so this mixin draws its output
from the defined brand theme. See [our page on themes](/fundamentals/themes.html)
for more info and examples.

#### bidi
The bidi mixin (short for “bi-directional”) is used to declare both left-to-right and
right-to-left values for a CSS property together, and output appropriate declarations
for each. This makes it easier to support right-to-left languages – such as Hebrew and
Arabic – while keeping both styles in the same place. Whenever you’re floating or
aligning something to one side, you might prefer to use the bidi mixin to reverse that
direction for other languages. Refer to `/includes/mixins/_bidi.scss` for more
documentation and usage.

```scss
@include bidi(((float, left, right),));
```

#### at2x
at2x is a helpful mixin for applying a high-resolution background image, for display
on high definition screens (a.k.a. “retina”). It automatically outputs the standard
resolution background image with the high-resolution version in a media query, along
with the `background-size` property to scale it. Both image files should be in the same
folder and have matching names, with the high resolution version suffixed with “high-res”,
e.g. `example.png` and `example-high-res.png`

```scss
@include at2x('/img/example.png', 100px, 100px);
```

#### light-links
The light-links mixin inverts link colors in elements/components with dark backgrounds.

```scss
@include light-links;
```

#### white-links
The white-links mixin explicitly sets link colors (in all pseudo-class states) to white.
This is useful for some elements/components with dark backgrounds where the regular
inverted link colors might be undesirable, typically for utilitarian components like a
footer.

```scss
@include white-links;
```

### Themes

Protocol supports [multiple brand themes](/fundamentals/typography.html), namely the Mozilla
and Firefox brands. Themes work by defining sets of variables in Sass maps in the
`/includes/_themes.scss` file, and those variables are fetched via the `get-theme()` function.
That function determines which set of variables to draw from based on the declared brand theme,
thus any themable property in CSS can have different values for different brands.

```scss
.mzp-c-my-component {
    background-color: get-theme('background-color');
    color: get-theme('body-text-color');

    .mzp-c-my-component-title {
        color: get-theme('title-text-color');
        font-family: get-theme('title-font-family');
    }
}
```

Use the `get-theme()` function for any themeable properties, especially basic colors for
foreground (text) and backgrounds. Note that most colors have an "inverse" counterpart
to use in dark style variants. Refer to `/includes/_themes.scss` for the actual values
for each brand theme, but here are the variable names in a handy list:

```
background-color
background-color-alt
background-color-alt-inverse
background-color-inverse
body-font-family
body-text-color
body-text-color-alt
body-text-color-alt-inverse
body-text-color-inverse
button-font-family
link-color
link-color-hover
link-color-hover-inverse
link-color-inverse
link-color-visited
link-color-visited-hover
link-color-visited-hover-inverse
link-color-visited-inverse
title-font-family
title-text-color
title-text-color-inverse
```

Text sizes are also defined as theme variables, allowing different brands to have slightly
different type scales. Don't use the `get-theme()` function for text sizing; use the text
size mixins instead. The mixins already draw from the theme variables but come with baked-in
responsive styling as well.
