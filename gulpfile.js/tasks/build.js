'use strict';

const gulp = require('gulp');
const clean = require('./clean');
const lintCSS = require('./lint-css');
const lintJS = require('./lint-js');
const copyStaticFiles = require('./copy-static');
const drizzleTask = require('./drizzle');
const compileSass = require('./compile-sass');
const copySass = require('./copy-sass');
const copyJS = require('./copy-js');
const concatJS = require('./concat-js');
const compressCSS = require('./compress-css');
const compressJS = require('./compress-js');
const generateIconData = require('./generate-icon-data');

/*
  Build task
  ==========
  This is the main Protocol build task which is responsible
  for compiling and building all assets including html, css,
  js, and static media. The build task consists of a number of
  smaller composite tasks, each having a singular responsibility.
  Composite tasks are performed serially when they depend on one
  another. When there is no dependency, they run in parallel to
  help reduce build times.
*/

const build = gulp.series(
    clean,
    gulp.parallel(lintCSS, lintJS),
    generateIconData,
    copyStaticFiles,
    drizzleTask,
    gulp.parallel(compileSass, copySass, copyJS, concatJS),
    gulp.parallel(compressCSS, compressJS)
);

// Register build task (for continuous deployment via Netlify)
gulp.task('build', build);
module.exports = build;
