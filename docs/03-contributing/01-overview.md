---
title: Contributing to Protocol
label: Overview
---

Protocol, like everything else Mozilla makes, is [open source](https://wiki.mozilla.org/Contribute).
We welcome contributions from people like you. Yes, you, dear reader, can help us
make Protocol better and more useful, no matter your skill level or area of interest.

### Reporting Bugs

The easiest way to help is to report bugs. Let us know if something isn’t doing
what you think it should do and we can try to fix it.

To report an error you’ve discovered in Protocol, [submit an issue on Github](https://github.com/mozilla/protocol/issues/new/choose/)
with a detailed description of the error and steps to reproduce. If possible,
include a link to a live example and/or a screenshot of the bug in effect. Also
be sure to mention the browser (and version) and operating system.

You should search for similar issues in case it’s already been reported. In
some cases a bug may have been fixed but the fix may not have been deployed,
so it’s a good idea to search through [recently closed issues](https://github.com/mozilla/protocol/issues?q=is%3Aissue+is%3Aclosed) as well.

### Requesting New Features

If you would like to request changes to a component or a new component be
added to Protocol, please [submit an issue on Github](https://github.com/mozilla/protocol/issues/new/choose/)
using the appropriate issue template. Please try to fill out this template
as thoroughly as you can. This will help the team understand the request
and triage issues more effectively.

## Contributing Code

Aside from reporting bugs or requesting features, an even more direct way to
contribute to Protocol is to write code.

Protocol is a design system, though the exact meaning of the term “design system”
is hard to pin down. For our purposes, a design system comprises the entirety of
guidelines, assets, and resources for producing websites in a specific style or
brand identity. It includes a style guide, a pattern library of coded components,
and the actual assets – fonts, graphics, CSS frameworks, JavaScript libraries –
needed to create websites.

The heart of Protocol is the pattern library – the HTML components that you can
assemble into a web page, and its soul is the CSS framework that styles those
components. We’re probably straining that metaphor but you get the point;
Protocol is made of code.

The Protocol design system comprises a CSS framework and a library of markup
patterns for web page components. There’s a bit of JavaScript for a few interactive
things, but for the most part Protocol is static HTML and CSS.

The pattern library lives at [protocol.mozilla.org](https://protocol.mozilla.org)
and its source code lives at [github.com/mozilla/protocol](https://github.com/mozilla/protocol/).
That code repository is also where the Protocol CSS framework lives, as well as
all the system documentation (including this page).

To write code for Protocol you’ll actually be working on the Protocol website
itself.

### Installing the Protocol site locally

We’ve done our best to make the barrier of entry to contributing code to
Protocol as low as possible. You can do some work directly through github
without actually installing Protocol locally, but if you want to do any complex
coding you’ll need to set up a local development environment.

* You’ll need a GitHub account.
    * [https://github.com/join](https://github.com/join)
    * [https://help.github.com/articles/set-up-git/](https://help.github.com/articles/set-up-git/)
* You’ll need to install Git.
    * [https://git-scm.com/downloads](https://git-scm.com/downloads)
    * [https://git-scm.com/book/en/v2/Getting-Started-Installing-Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
* You’ll need to install Node and npm.
    * [https://docs.npmjs.com/downloading-and-installing-node-js-and-npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

With those prerequisites met:

1. Fork the [Protocol GitHub repository](https://github.com/mozilla/protocol/)
    to your personal account.
    * https://help.github.com/articles/fork-a-repo/
2. Clone that remote repo to your computer.
    * https://help.github.com/articles/cloning-a-repository/
3. On your computer’s command line, navigate to the folder to which you just
    cloned the Protocol repo.
4. Within that folder, run `npm install`. This will install all the dependencies.
5. Next run `npm run webpack`. This will compile the Sass and copy assets
    into a local folder in preparation to run the server. It also starts a “watch”
    process that will watch those files and automatically recompile when they change.
6. In another command line console (and still within the Protocol folder), run
    `npm start`. This will start your local server.

You now have a local instance of the Protocol site running on your computer. You
can load the site in a browser at http://localhost:3000. As you edit files they
will update automatically and you can see your changes “live” on your local
development environment.

Sass and component files will reload automatically as you change them, but
documentation pages written in Markdown are only processed at startup, so they
require restarting the Fractal server to see the changes.

1. Make whatever edits you need to make, ideally in a fresh branch.
    * https://git-scm.com/book/en/Git-Branching-Basic-Branching-and-Merging
    * https://help.github.com/articles/creating-and-deleting-branches-within-your-repository/
2. When you’re done, commit your changes and push them to your GitHub remote
    repository.
    * https://help.github.com/articles/pushing-to-a-remote/
3. Submit a pull request from your fork to the Mozilla repo.
    * https://help.github.com/articles/creating-a-pull-request-from-a-fork/

You can also [make some edits directly on github.com](https://help.github.com/articles/editing-files-in-another-users-repository)
without installing the site locally. For that you don’t even have to install
Git or Node, you just need a GitHub account. This is fine for updating docs or
minor tweaks that don’t need extensive testing or review, but for any serious
coding you really should have a local instance running so you can see your work
as it progresses.

### File structure

Once you’ve cloned the Protocol repository, you should spend some time browsing
through the folders in your local copy (or on Github) to familiarize yourself
with the general structure of the project. You’ll have to drill down a bit to
reach the really good stuff but the top-level root folder looks something like:

```text
protocol
├── assets (Sass, JavaScript, and font files; this is what gets published with the package)
├── components (the HTML components)
├── docs (documentation pages [including this one])
├── static (media assets for display on the Protocol website, but not part of Protocol itself)
├── tests (automated test scripts)
└── theme (the custom theme for the Protocol website)
```

There are a few other files in the project root, mostly configurations for the
documentation site and the build process, but one file to take note of is `CHANGELOG.md`
that contains a historical record of Protocol.

The files in the `components` folder represent the actual Protocol components.
They’re snippets of HTML that, when combined with the CSS that styles them, can
be assembled to build a web page. All of the Protocol components can be found in
the `components` folder, each organized into subfolders, and all of the related
CSS and JavaScript is in `assets` (we’ll do a deeper dive into that folder shortly).

## Component patterns

The Protocol documentation uses [Fractal](https://fractal.build) and component
templates are built with [Nunjucks](https://mozilla.github.io/nunjucks/), a
templating language that is mostly plain HTML with some added enhancements. Each
component resides in its own Nunjucks template file (using the extension `.html`)
along with a `readme.md` file (written in [Markdown](https://daringfireball.net/projects/markdown/)
format) with notes and documentation for that component. Many have an accompanying
configuration file written in [YAML](https://yaml.org/) providing
[contextual data](https://fractal.build/guide/core-concepts/context-data.html)
and defining [component variants](https://fractal.build/guide/components/variants.html).

All of this gets processed and rendered to show a live example of the component
with all its variants and added documentation.

Here’s a minimal example of a Protocol component:

```twig
<button class="mzp-c-button">Button</button>
```

Beyond providing a single example of a component, by using a templating language
like Nunjucks, these can be embedded in other component templates (and documents)
using `{% include %}` or Fractal’s `{% render %}` helper. Each component can be
addressed by its unique “handle” (based on the file name or defined in a
configuration file):

```twig
{% render '@button' %}
```

For greater flexibility we can also define context variables in a component,
allowing us to pass data into the template when the component is rendered elsewhere.
For example, our button might contain a variable called `label`:

```twig
<button class="mzp-c-button">{{ label }}</button>
```

When we render that component in another template we can replace the variable
with different content:

```twig
{% render '@button', { label: 'Click Me!' } %}
```

This is obviously an abbreviated introduction but hopefully it will help you get
started. Look through the various components in Protocol for more robust examples
and refer to the [Fractal documentation](https://fractal.build/guide/components/)
for more about how components and component variants are created and configured.

## The Protocol CSS Framework

Along with the HTML snippets that give Protocol components their structure,
Protocol also comprises a [CSS framework](/docs/usage/framework) to give it style.
Our framework is built with [Sass](https://sass-lang.com) as a pre-processor, and
we author Sass using the [SCSS](https://sass-lang.com/documentation/syntax#scss)
syntax.

You can find our Sass files in the `assets/sass/protocol` folder. This is where
you’ll find all the CSS that styles Protocol components as well as the variables,
mixins, and functions that make it all possible.

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
│   ├── themes
│   ├── _functions.scss
│   └── _lib.scss
├── templates
├── protocol-components.scss
└── protocol.scss
```

It’s a good idea to explore the files and folders here to get the lay of the land.
We try to include helpful comments in each `.scss` file to explain what all the
different pieces do and how to use them so a lot of our documentation lives
directly within the source code.

Our styles are fragmented across numerous files in order to keep things more
self-contained and organized, and to help prevent conflicts when several people
work simultaneously on different things (when more than one person is trying to
edit the same file at the same time they’ll inevitably step on each other’s work).

The `base` folder has all the basic, general-purpose styling for common HTML
elements. The `components` folder holds the styling for individual Protocol
components. The `templates` folder holds styling for page and component layouts.
And the `includes` folder holds the supporting mixins and functions that power
the entire framework.

Each of these folders in turn hold other files that import and collect the smaller
fragments. Almost all of our individual SCSS files are [Sass partials](https://sass-lang.com/guide#topic-4),
prefixed with an underscore. They’re intended to be imported into another file
when the Sass is compiled; they don’t all turn into separate CSS files of their own.

## Styling a component

All of the styling for a given component will typically be in a single `.scss` file
named for that component. Here’s a bare-bones example that we’ll imagine is a file
named `_item.scss` (this is not an actual Protocol component):

```scss
@use '../includes/lib' as *;

.mzp-c-item {
    @include text-title-md;
    color: $color-ink-80;
    margin: $spacing-lg 0;
}
```

If you don't change the namespace of the file being imported your `.scss` file would look like this:

```scss
@use '../includes/lib';

.mzp-c-item {
    @include lib.text-title-md;
    color: lib.$color-ink-80;
    margin: lib.$spacing-lg 0;
}
```


Even in this minimal example there’s a lot happening, and almost none of it is
plain CSS. If you’re familiar with Sass/SCSS already this will look more familiar,
but if you’re not let’s dig a bit deeper.

```scss
@import '../includes/lib';
```

First, we import the Protocol library file with `@use` directive: `includes/_lib.scss`.
To learn more about `@use` and `@forward` read [this article](https://www.oddbird.net/2019/10/02/sass-modules/).
Since that file is a Sass partial we don’t need the underscore prefix or the file extension, just
referencing the relative path and filename is enough. That library file in turn
imports all of the functions, mixins, and variables Protocol needs to process the
rest of this SCSS file. Almost every file you see in the Protocol framework will
import that library at the very top.

```scss
.mzp-c-item {
```

Next we get to the proper component styles, starting with a class selector. All of
our classes follow a [standard naming convention](/docs/contributing/naming).
They’re namespaced with `mzp` to avoid conflicts with any other styling or libraries
with which they may need to coexist, followed by a `c` prefix indicating that
this is a component.

```scss
    @include text-title-md;
```

The first style declaration is a Sass mixin that sets the font-size for the
element. We use mixins for font sizes to maintain a standardized type scale, and
the mixins also include media queries to make the sizes responsive to the viewport
size; bigger screens get bigger text. These sizing mixins are defined in
`includes/mixins/_typography.scss`. See [our page on typography](/docs/fundamentals/typography)
for more about our type scale.

Next we declare the text color using a variable. Protocol has an extensive color
palette, all assigned to named variables so every occurance of a given color will
always be the exact same value (`$color-ink-80` is a dark purplish black). You
can see [our entire color palette](/docs/fundamentals/color) for all the different
options.

```scss
    margin: $spacing-lg 0;
```

The next line sets margins above and below the element, once again using a named
variable instead of an explicit value. Assigning variables to spacing units means
we ensure consistency throughout the system, and also lets us change the value of
such a variable in one place and it will automatically propagate to every other
part of Protocol. The `$spacing-lg` variable is `24px` but if we want to change
that to `20px` we would only have to make that change once.

### Design Tokens

The example above shows a Sass variable used as a margin value. We call variables
like these _design tokens_ and they’re more than just variables. Design tokens
are a way to document the lowest level design attributes and share them throughout
a complex system, and even across multiple systems. We use tokens as much as
possible in place of hard-coded values, especially for colors and units of measure.
Whenever you need a basic value in CSS, see if there’s already a token for it.
You can see [a list of all the design tokens in Protocol](/docs/fundamentals/design-tokens).

Tokens are also a partial abstraction of the value they represent. Assigning a
name to a token also implies a particular purpose a step removed from its specific
value. A token like `$spacing-md` represents “a medium unit of space” and we don’t
necessarily need to think about exactly how many pixels that is, we only know
it’s a bit larger than small and a bit smaller than large. For now we’ve decided
that a medium space is `16px`, but that could easily change to `12px` or `20px`
because “medium” is relative. Avoid misusing a token as an alias for its specific
value since the whole point is that the value can change.

Also avoid misusing a token to fill in a value for something it wasn’t made for.
For example, the token `$spacing-md` is intended for spacing within or between
elements. Don’t use it set the height of an image or width of a border or size
of a font (unless there’s a very good reason to do so).

(Side note: The `$spacing-*` tokens are smaller units, mostly for interior spacing
inside components or between close elements. The `$layout-*` tokens are larger,
intended for wider gaps between components on the page.)

Protocol’s design tokens [reside in their own repository](https://github.com/mozilla/protocol-tokens)
and are [published as their own package](https://www.npmjs.com/package/@mozilla-protocol/tokens).
