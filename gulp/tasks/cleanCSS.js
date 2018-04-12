const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
const config = require('../config').cleanCss;

gulp.task('cleanCss', ['reset'], function() {
    return gulp.src(config.src)
    .pipe(cleanCSS({processImport: false}))
    .pipe(rename(config.rename))
    .pipe(gulp.dest(config.dest));
});
