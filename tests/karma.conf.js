/* eslint-env node */

// Karma configuration
// Generated on Fri Jun 22 2018 15:20:09 GMT+0100 (BST)

module.exports = function(config) {
    'use strict';

    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            // library
            '../package/protocol/js/protocol-supports.js',
            '../package/protocol/js/protocol-utils.js',
            // js files
            '../package/protocol/js/protocol-details.js',
            '../package/protocol/js/protocol-lang-switcher.js',
            '../package/protocol/js/protocol-menu.js',
            '../package/protocol/js/protocol-navigation.js',
            '../package/protocol/js/protocol-notification-bar.js',
            // tests
            'unit/protocol-details.js',
            'unit/protocol-lang-switcher.js',
            'unit/protocol-menu.js',
            'unit/protocol-navigation.js',
            'unit/protocol-notification-bar.js'
        ],


        // list of files / patterns to exclude
        exclude: [
        ],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Firefox'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    });
};
