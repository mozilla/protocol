var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var config = require('../config').sass;
var handleErrors = require('../utils/handleErrors');
var autoprefixer = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');

gulp.task('sass', ['replace'],function () {
  return gulp.src(config.src)
    .pipe(plumber({ errorHandler: handleErrors }))
    .pipe(sourcemaps.init())
    .pipe(sass(config.settings))
    .pipe(autoprefixer({ browsers: ['last 2 version']}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(config.dest));
});
