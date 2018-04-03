'use strict';

module.exports = {
  copy: {
    src: './src/static/**/*',
    dest: './dist/static'
  },

  serve: {
    plugins: {
      browserSync: {
        open: false,
        notify: false,
        files: ['./dist/**/*'],
        server: { baseDir: './dist' }
      }
    }
  },

  watch: {
    watchers: [
      {
        match: ['./src/static/**/*'],
        tasks: ['copy']
      },
      {
        match: ['src/assets/sass/**/*.scss'],
        tasks: ['css:lint']
      },
      {
        match: ['./src/assets/**/*.scss'],
        tasks: ['sass']
      },
      {
        match: ['./src/assets/**/*.js'],
        tasks: ['js']
      },
      {
        match: [
          './src/**/*.hbs',
          './src/data/**/*',
          './src/**/*.yaml',
          './src/**/*.md'
        ],
        tasks: ['drizzle']
      }
    ]
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
  }
};
