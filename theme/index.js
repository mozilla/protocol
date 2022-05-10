'use strict';

const mandelbrot = require('@frctl/mandelbrot');

// Show these panels in production:
const panels = ['notes', 'html', 'resources'];
// Add these panels for dev only
if (process.env.ENV === 'development') {
    panels.push('info', 'view', 'context');
}

// Configure the theme
const subTheme = mandelbrot({
    styles: ['default', '/theme/css/theme.css'],
    skin: 'black',
    format: 'yaml',
    panels: panels,
    navigation: 'split',
    nav: ['docs', 'components', 'information'],
    favicon: '/theme/favicon.png',
    labels: {
        search: {
            placeholder: 'Search components…',
        },
        documentation: {
            title: 'Documentation',
        }
    },
    information: [
        {
            label: 'Built on',
            value: new Date(),
            type: 'time', // Outputs a <time /> HTML tag
            format: (value) => {
                return value.toLocaleDateString('en');
            }
        }
    ],
});

// Specify a template directory to override any view templates
subTheme.addLoadPath(`${__dirname}/views`);

// Specify the static assets directory that contains the custom stylesheet
subTheme.addStatic(`${__dirname}/static`, '/theme');

// Export the customised theme instance so it can be used in Fractal projects
module.exports = subTheme;
