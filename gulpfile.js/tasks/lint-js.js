'use strict';

const gulp = require('gulp');
const eslint = require('gulp-eslint');
const config = require('../config').lintJS;

function lintJS() {
    return gulp.src(config.src)
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
}

module.exports = lintJS;
