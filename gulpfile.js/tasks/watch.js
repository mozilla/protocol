'use strict';

const gulp = require('gulp');
const config = require('../config').watch;
const copyStaticFiles = require('./copy-static');
const drizzleTask = require('./drizzle');
const compileSass = require('./compile-sass');
const copyJS = require('./copy-js');
const concatJS = require('./concat-js');

// Watch files for changes & rebuild.
function watchTask() {
    gulp.watch(config.watchers.static, copyStaticFiles);
    gulp.watch(config.watchers.css, compileSass);
    gulp.watch(config.watchers.js, gulp.series(concatJS, copyJS));
    gulp.watch(config.watchers.drizzle, drizzleTask);
}

module.exports = watchTask;
