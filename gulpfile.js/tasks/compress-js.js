'use strict';

const gulp = require('gulp');
const uglify = require('gulp-uglify');
const plumber = require('gulp-plumber');
const rename = require('gulp-rename');
const handleErrors = require('../utils/handleErrors');
const config = require('../config').compressJS;
const merge = require('merge-stream');

// Create minified versions of all JS assets.
function compressJS() {
    let tasks = [];

    Object.keys(config.tasks).forEach((key) => {
        let val = config.tasks[key];
        tasks.push(gulp.src(val.src)
            .pipe(plumber({ errorHandler: handleErrors }))
            .pipe(uglify())
            .pipe(rename(config.rename))
            .pipe(gulp.dest(val.dest)));
    });

    return merge(tasks);
}

module.exports = compressJS;
