'use strict';

const gulp = require('gulp');
const config = require('../config').jsCopy;
const merge = require('merge-stream');

// Copy across all original JS files for distribution.
function copyJS() {
    let tasks = [];
    Object.keys(config).forEach((key) => {
        let val = config[key];
        tasks.push(gulp.src(val.src).pipe(gulp.dest(val.dest)));
    });

    return merge(tasks);
}

module.exports = copyJS;
