'use strict';

const gulp = require('gulp');
const config = require('../config').testJS;
const Server = require('karma').Server;

// Run JS unit tests using Karma.
function test(cb) {
    const server = new Server({
        configFile: config.fileName,
        singleRun: config.singleRun
    });

    server.on('browser_error', function (browser, err){
        throw err;
    });

    server.on('run_complete', function (browsers, results){
        if (results.failed) {
            throw new Error('Karma: Tests Failed');
        }
        cb();
    });

    server.start();
}

gulp.task('test', test);
module.exports = test;
