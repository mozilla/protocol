'use strict';

const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const config = require('../config').compressCss;
const merge = require('merge-stream');

// Create minified versions of all CSS assets.
function compressCSS() {
    let tasks = [];

    Object.keys(config.tasks).forEach((key) => {
        let val = config.tasks[key];
        tasks.push(gulp.src(val.src)
            .pipe(cleanCSS({processImport: false}))
            .pipe(rename(config.rename))
            .pipe(gulp.dest(val.dest)));
    });

    return merge(tasks);
}

module.exports = compressCSS;
