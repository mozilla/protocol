const gulp = require('gulp');
const config = require('../config').sassCopy;
const merge = require('merge-stream');

// Copy across all original Sass source files for distribution.
gulp.task('sass:copy', () => {
    let tasks = [];
    Object.keys(config).forEach((key) => {
        let val = config[key];
        tasks.push(gulp.src(val.src).pipe(gulp.dest(val.dest)));
    });

    return merge(tasks);
});
