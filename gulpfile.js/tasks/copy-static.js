'use strict';

const gulp = require('gulp');
const config = require('../config').staticCopy;
const merge = require('merge-stream');

// Copy across all static assets for both Protocol and docs.
function copyStaticFiles() {
    let tasks = [];
    Object.keys(config).forEach((key) => {
        let val = config[key];
        tasks.push(gulp.src(val.src).pipe(gulp.dest(val.dest)));
    });

    return merge(tasks);
}

module.exports = copyStaticFiles;
