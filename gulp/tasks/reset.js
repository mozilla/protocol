const gulp = require('gulp');
const config = require('../config').replace;
const handleErrors = require('../utils/handleErrors');
const plumber = require('gulp-plumber');
const replace = require('gulp-replace');

gulp.task('reset', ['sass'], function() {
  return gulp.src(config.src)
    .pipe(plumber({ errorHandler: handleErrors }))
    .pipe(replace(config.replacement, config.base))
    .pipe(gulp.dest(config.dest));
});
