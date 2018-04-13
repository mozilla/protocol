const gulp = require('gulp');
const uglify = require('gulp-uglify');
const plumber = require('gulp-plumber');
const handleErrors = require('../utils/handleErrors');
const config = require('../config').uglify;

gulp.task('uglify', ['concatJS'],function() {
  return gulp.src(config.src)
    .pipe(plumber({ errorHandler: handleErrors }))
    .pipe(uglify())
    .pipe(gulp.dest(config.dest));
});
