var gulp = require('gulp');
var config = require('../config').replace;
var handleErrors = require('../utils/handleErrors');
var plumber = require('gulp-plumber');
var replace = require('gulp-replace');

gulp.task('reset', ['sass'], function() {
  return gulp.src(config.src)
    .pipe(plumber({ errorHandler: handleErrors }))
    .pipe(replace(config.replacement, config.base))
    .pipe(gulp.dest(config.dest));
});
