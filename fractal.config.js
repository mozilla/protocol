'use strict';

// Require the path module
const path = require('path');

// Require the Fractal module
const fractal = module.exports = require('@frctl/fractal').create();

// Require Nunjucks
const nunjucks = require('@frctl/nunjucks');

const pkg = require(path.join(__dirname, 'package.json'));

// Set the title
fractal.set('project.title', 'Mozilla Protocol');

// Provide the package.json "version" to the templates
fractal.set('project.version', pkg.version);

// Server configuration
fractal.web.set("server.port", 3000);
fractal.web.set("server.sync", true);
fractal.web.set("debug", true);

// Configure components
fractal.components.engine(nunjucks);
fractal.components.set('ext', '.html');
fractal.components.set('path', path.join(__dirname, 'components'));
fractal.components.set('statuses', {
    deprecated: {
        label: "Deprecated",
        description: "Deprecated component slated for removal.",
        color: "firebrick"
    },
    wip: {
        label: "WIP",
        description: "Work in progress, not yet ready for use.",
        color: "darkorange"
    }
});

// Configure documentation pages
fractal.docs.set('ext', '.md');
fractal.docs.set('path', path.join(__dirname, 'docs'));
fractal.docs.set('statuses', {
    outdated: {
        label: "Outdated",
        description: "Outdated documentation, needs updating.",
        color: "firebrick"
    },
    draft: {
        label: "Draft",
        description: "Draft documentation, work in progress.",
        color: "darkorange"
    }
});

// Tell Fractal where to look for static assets.
fractal.web.set('static.path', path.join(__dirname, 'static'));

// Tell Fractal where to build the site.
fractal.web.set('builder.dest', __dirname + 'dist');

// Custom theme
const theme = require('./theme');
fractal.web.theme(theme);
