var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var config = require('../config').cleanCss;

gulp.task('cleanCss', ['reset'], function() {
    return gulp.src(config.src)
    .pipe(cleanCSS({processImport: false}))
    .pipe(rename(config.rename))
    .pipe(gulp.dest(config.dest));
});
