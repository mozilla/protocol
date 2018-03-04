'use strict';

const drizzle = require('drizzle-builder');
const gulp = require('gulp');
const ghPages = require('gulp-gh-pages');
const helpers = require('@cloudfour/hbs-helpers');
const tasks = require('@cloudfour/gulp-tasks');
const env = require('gulp-util').env;
const config = require('./config');
const sass = require('gulp-sass');

// Append config
Object.assign(config.drizzle, { helpers });

// Register core tasks
[
  'clean',
  'copy',
  'js',
  'serve',
  'watch'
].forEach(name => tasks[name](gulp, config[name]));


// Register Drizzle builder task
gulp.task('drizzle', () => {
  const result = drizzle(config.drizzle);
  return result;
});

// Register Sass preprocessor
gulp.task('sass', () => {
  return gulp.src('./src/assets/system/sass/**/*.scss')
    .pipe(sass({ style: 'compact' }))
    .pipe(gulp.dest('./dist/assets/system/css'));
});

// Register frontend composite task
gulp.task('frontend', [
  'drizzle',
  'copy',
  'sass',
  'js'
]);

// Register build task (for continuous deployment via Netflify)
gulp.task('build', ['clean'], done => {
  gulp.start('frontend');
  done();
});

/**
 * Register demo task (deploy output to GitHub Pages)
 * NOTE: Run this after building.
 */
gulp.task('demo', () => {
  const buildDest = `${config.drizzle.dest.pages}/**/*`;
  return gulp.src(buildDest)
    .pipe(ghPages({
      cacheDir: 'demo'
    }));
});

// Register default task
gulp.task('default', ['frontend'], done => {
  gulp.start('serve');
  if (env.dev) {
    gulp.start('watch');
  }
  done();
});
