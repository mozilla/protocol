import { fileURLToPath } from 'node:url';
import { create } from '@fractality/fractality';
import nunjucks from '@fractality/nunjucks';
import theme from './theme/index.mjs';
import pkg from './package.json' with { type: 'json' };

const fractal = create();

// Set the title
fractal.set('project.title', 'Mozilla Protocol');

// Provide the package.json 'version' to the templates
fractal.set('project.version', pkg.version);

// Server configuration
fractal.web.set('server.port', 3000);
fractal.web.set('server.sync', true);
fractal.web.set('debug', true);

// Configure components
fractal.components.engine(nunjucks);
fractal.components.set('ext', '.html');
fractal.components.set('path', fileURLToPath(import.meta.resolve('./components')));
fractal.components.set('default.status', null);
fractal.components.set('statuses', {
    deprecated: {
        label: 'Deprecated',
        description: 'Deprecated component slated for removal.',
        color: 'firebrick'
    },
    wip: {
        label: 'WIP',
        description: 'Work in progress, not yet ready for use.',
        color: 'darkorange'
    }
});

// Configure documentation pages
fractal.docs.set('ext', '.md');
fractal.docs.set('path', fileURLToPath(import.meta.resolve('./docs')));
fractal.docs.set('statuses', {
    outdated: {
        label: 'Outdated',
        description: 'Outdated documentation, needs updating.',
        color: 'firebrick'
    },
    draft: {
        label: 'Draft',
        description: 'Draft documentation, work in progress.',
        color: 'darkorange'
    }
});

// Tell Fractal where to look for static assets.
fractal.web.set('static.path', fileURLToPath(import.meta.resolve('./static')));

// Tell Fractal where to build the site.
fractal.web.set('builder.dest', fileURLToPath(import.meta.resolve('./dist')));

// Custom theme
fractal.web.theme(theme);

export default fractal;
