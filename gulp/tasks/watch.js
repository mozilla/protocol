const gulp = require('gulp');
const config = require('../config').watch;
const watch = require('gulp-watch');
const runSequence = require('run-sequence');

gulp.task('watch', () => {
    config.watchers.forEach(item => {
        watch(item.match, () => {
            runSequence(item.tasks);
        });
    });
});
