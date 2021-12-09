'use strict';

const dest = './dist/assets';
const src = './src/assets';
const version = require('../package.json').version;

module.exports = {
    clean: {
        dest: './dist/'
    },
    concatJS: {
        docs: {
            src: [
                `${src}/js/docs/**/*.js`
            ],
            dest: `${dest}/docs/js/`
        },
    },
    sassCompile: {
        protocol: {
            src: [
                `${src}/sass/protocol/protocol.scss`,
                `${src}/sass/protocol/protocol-components.scss`
            ],
            dest: `${dest}/protocol/protocol/css/`
        },
        docs: {
            src: [
                `${src}/sass/docs/**/*.scss`,
                `${src}/sass/demos/**/*.scss`
            ],
            dest: `${dest}/docs/css/`
        }
    },
    sassCopy: {
        docs: {
            src: [
                `${src}/sass/docs/**/*.scss`,
                `${src}/sass/demos/**/*.scss`
            ],
            dest: `${dest}/docs/css/`
        }
    },
    jsCopy: {
        protocol: {
            src: `${src}/js/protocol/**/*.js`,
            dest: `${dest}/protocol/protocol/js/`
        },
        docs: {
            src: [
                `${src}/js/docs/**/*.js`,
                `${src}/js/demos/**/*.js`
            ],
            dest: `${dest}/docs/js/`
        }
    },
    generateIconData: {
        src: './node_modules/@mozilla-protocol/assets/icons',
        dest: './src/data/icons.json'
    },
    staticCopy: {
        img: {
            src: [
                `${src}/img/**/*`,
                './node_modules/@mozilla-protocol/assets/**/*'
            ],
            dest: `${dest}/protocol/protocol/img/`
        },
        fonts: {
            src: `${src}/fonts/*`,
            dest: `${dest}/protocol/protocol/fonts/`
        },
        docs: {
            src: './src/static/**/*',
            dest: './dist/static'
        },
        colorData: {
            src: './node_modules/@mozilla-protocol/tokens/dist/colors/colors.json',
            dest: './src/data'
        },
        tokenData: {
            src: './node_modules/@mozilla-protocol/tokens/dist/index.json',
            dest: './src/data'
        }
    },
    serve: {
        plugins: {
            browserSync: {
                open: false,
                notify: false,
                files: ['./dist/**/*'],
                server: {
                    baseDir: './dist'
                }
            }
        }
    },
    watch: {
        watchers: {
            static: ['./src/static/**/*'],
            js: [`${src}/js/**/*.js`],
            css: `${src}/sass/**/*.scss`,
            drizzle: [
                './src/**/*.hbs',
                './src/data/**/*',
                './src/**/*.yaml',
                './src/**/*.md'
            ]
        }
    },
    drizzle: {
        beautifier: {
            /* eslint-disable camelcase */
            indent_char: ' ',
            indent_size: 2,
            indent_with_tabs: false,
            max_preserve_newlines: 1,
            wrap_line_length: 60,
            unformatted:
                `a abbr acronym address b bdo big cite code col del dfn dt em font
                h1 h2 h3 h4 h5 h6 i img ins kbd mark pre q s samp small span
                strike strong sub sup tt u var`.split(' ')
            /* eslint-enable camelcase */
        },
        src: {
            patterns: {
                basedir: './src/patterns',
                glob: './src/patterns/**/*.hbs'
            },
            templates: {
                basedir: './src/templates',
                glob: './src/templates/**/*.hbs'
            }
        },
        dest: {
            pages: './dist',
            patterns: './dist/patterns'
        },
        fieldParsers: {
            description: 'markdown',
            notes: 'markdown',
            tips: 'markdown',
            nonos: 'markdown'
        }
    },
    version: version
};
