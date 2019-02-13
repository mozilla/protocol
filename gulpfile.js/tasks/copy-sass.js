'use strict';

const gulp = require('gulp');
const config = require('../config').sassCopy;
const merge = require('merge-stream');
const replace = require('gulp-replace');

// Copy across all original Sass source files for distribution.
function copySass() {
    let tasks = [];
    Object.keys(config).forEach((key) => {
        let val = config[key];
        tasks.push(gulp.src(val.src)
            .pipe(replace('./node_modules/@mozilla-protocol/', ''))
            .pipe(gulp.dest(val.dest))
        );
    });

    return merge(tasks);
}

module.exports = copySass;
