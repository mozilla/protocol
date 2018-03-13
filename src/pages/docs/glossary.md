---
title: Glossary of Terms
---

In any discussion of design systems there will be a certain amount of insider jargon. The term “design system” is itself a bit of insider jargon. Here we’ll try to set definitions of common terms so we can all refer to things by the same names.

### Design System

A design system comprises the entirety of guidelines, assets, and resources for producing websites in a specific style or brand identity. It includes a style guide, a pattern library of examples, and the actual assets – fonts, graphics, CSS frameworks, JavaScript libraries – needed to create websites.

### Style guide

A set of guidelines for creating media in a particular style. This includes brand elements, color palette, typography, and copywriting.

A style guide can also refer to a set of standards for formatting code.

### Design Pattern

In software engineering, a design pattern is a general reusable solution to a commonly occurring problem. In the context of front-end web development, a design pattern can take the form of a reusable bundle of markup and CSS that establishes a template for structuring and styling commonly occuring types of content.

For example, a website might have lots of forms. There are many ways to structure a form in HTML and style it with CSS, but within a complex system it can be beneficial to establish a design pattern for forms to ensure consistency and relieve developers of solving the same problem over and over for every new form they create.

### Pattern Library

A collection of common design patterns. These are reusable snippets of HTML, CSS, and JavaScript, visual examples for reference, and documentation about how to use them.

### Atomic Design

As coined by [Brad Frost](http://atomicdesign.bradfrost.com/table-of-contents/), ”atomic design is a methodology for creating design systems.” It consists of breaking a web page down into its smallest component parts, which can then be combined and assembled in different configurations, adding more parts in increasing complexity to arrive at the complete page.

Using chemistry as a metaphor, Brad names these collections of parts “atoms, molecules, organisms, templates, and pages.”

### Atom

Atoms are the smallest part of a web page, usually corresponding to a single HTML element. A single link, a single heading, a single button, and so on.

### Molecule

A small assemblage of atoms that, combined, form a basic functional piece of an interface. This might be a heading with a paragraph, a heading with an image and a link, a link with an icon, a form field with a label, a form field with a label and a button, etc. Single elements by themselves rarely do much, but a few elements combined can serve a more meaningful purpose.

### Organism

A complete and distinct chunk of the interface that should be able to stand on its own and function independently in any template. These are the reusable building blocks of a web page. Examples:

<ul class="prose">
    <li>A page intro with headline, subheading, hero image, and call to action link.</li>
    <li>A signup form with headline, several form fields with labels, and a submit button.</li>
    <li>A brand masthead with logo, tagline, and navigation.</li>
    <li>A footer with navigation links, copyright info, and a language selector.</li>
</ul>

### Template

An arrangement of components (organisms, molecules, and atoms) that form a complete web page. The template is the skeleton supporting the final, polished page, so it doesn't necesarily include final content or visual design. Different pages may share a common template with the same basic structure but with different modules, content, and presentation.

### Page

A web page is a page on the web, even though ”page” is mostly a useful metaphor. Where a “template” is the modular structure under a page, when we refer to the page as a whole we’re talking about the complete experience: structure, content, design, imagery, and behavior. A page is built upon a template composed of organisms made up of molecules assembled from atoms.

