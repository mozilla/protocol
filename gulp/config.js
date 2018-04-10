var dest = "./dist/assets/";
var src = "./src/assets";
var version = "/1.0.0";

module.exports = {
  concatJS: {
    documentation: {
      src: [
        src + '/js/site/global.js',
        src + '/js/site/prism.js'
      ],
      dest: dest + '/js'
    },
    protocol: {
      src: [
        src + '/js/protocol/protocol-accordion.js',
        src + '/js/protocol/protocol-modal.js'
      ],
      dest: dest + '/js'
    }
  },
  lintCss: {
    src: [
      dest + "/sass/protocol/protocol.css",
      dest + "/sass/site/site.css"
    ]
  },
  cleanCss: {
    src: [
      dest + '/css/protocol.css',
      dest + '/css/site.css',
      dest + '/css/prism.css'
    ],
    dest: dest + '/css',
    rename: { suffix: '.min' }
  },
  replace: {
    src: src + '/sass/protocol/protocol.scss',
    dest: dest + '/css',
    base: "../../../../",
    replacement: "../../../bower_components/"
  },
  sass: {
    src: [
      src + '/sass/protocol/protocol.scss',
      src + '/sass/site/site.scss',
      src + '/sass/site/prism.scss'
    ],
    dest: dest + '/css/'
  },
  uglify: {
    src: src + '/protocol/protocol.js',
    dest: src + '/scripts',
    settings: {
      errLogToConsole: true,
      sourceComments: true
    }
  },

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
  },
  version: version
}
