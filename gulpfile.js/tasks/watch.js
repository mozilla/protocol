'use strict';

const gulp = require('gulp');
const config = require('../config').watch;
const lintCSS = require('./lint-css');
const lintJS = require('./lint-js');
const copyStaticFiles = require('./copy-static');
const drizzleTask = require('./drizzle');
const compileSass = require('./compile-sass');
const copyJS = require('./copy-js');
const concatJS = require('./concat-js');

// Watch files for changes & rebuild.
function watchTask() {
    gulp.watch(config.watchers.static, copyStaticFiles);
    gulp.watch(config.watchers.css, gulp.series(lintCSS, compileSass));
    gulp.watch(config.watchers.js, gulp.series(lintJS, concatJS, copyJS));
    gulp.watch(config.watchers.drizzle, drizzleTask);
}

module.exports = watchTask;
