'use strict';

const gulp = require('gulp');
const build = require('./build');
const serve = require('./serve');
const watch = require('./watch');
const argv = require('yargs').argv;

function defaultTask(cb) {
    serve();

    if (argv.dev) {
        watch();
    }

    cb();
}

gulp.task('default', gulp.series(build, defaultTask));
module.exports = gulp.series(build, defaultTask);
