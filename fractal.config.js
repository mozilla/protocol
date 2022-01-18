'use strict';

/*
* Require the path module
*/
const path = require('path');

/*
 * Require the Fractal module
 */
const fractal = module.exports = require('@frctl/fractal').create();
const pkg = require(path.join(__dirname, 'package.json'));

// Set the title
fractal.set('project.title', 'Mozilla Protocol');

// Provide the package.json "version" to the templates
fractal.set('project.version', pkg.version);

// Server configuration
fractal.web.set("server.port", 3000);
fractal.web.set("server.sync", true);
fractal.web.set("debug", true);

// Tell Fractal where to look for components.
fractal.components.set('path', path.join(__dirname, 'components'));

// Tell Fractal where to look for documentation pages.
fractal.docs.set('path', path.join(__dirname, 'docs'));

// Tell Fractal where to look for static assets.
fractal.web.set('static.path', path.join(__dirname, 'static'));

// Tell Fractal where to build the site.
fractal.web.set('builder.dest', __dirname + 'dist');

// Docs config
fractal.docs.set('ext', '.md');

// Custom theme
const theme = require('./theme');
fractal.web.theme(theme);
