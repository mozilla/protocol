'use strict';

const drizzle = require('drizzle-builder');
const gulp = require('gulp');
const ghPages = require('gulp-gh-pages');
const helpers = require('@cloudfour/hbs-helpers');
const tasks = require('@cloudfour/gulp-tasks');
const env = require('gulp-util').env;
const config = require('./config');
const sass = require('gulp-sass');
const gulpStylelint = require('gulp-stylelint');

const lintPathsCSS = [
    'src/assets/sass/**/*.scss',
    'src/assets/sass/**/*.css'
];

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
  return gulp.src('./src/assets/sass/**/*.scss')
    .pipe(sass({ style: 'compact' }))
    .pipe(gulp.dest('./dist/assets/css'));
});

// Lint CSS
gulp.task('css:lint', () => {
    return gulp.src(lintPathsCSS)
        .pipe(gulpStylelint({
            failAfterError: false,
            reporters: [{
                formatter: 'string',
                console: true
            }]
        }));
});

// Copy JavaScripts
gulp.task('js', () => {
  return gulp.src('./src/assets/js/**/*.js')
    .pipe(gulp.dest('./dist/assets/js'));
});

// Register frontend composite task
gulp.task('frontend', [
  'drizzle',
  'copy',
  'sass',
  'css:lint',
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
