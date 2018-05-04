const gulp = require('gulp');
const runSequence = require('run-sequence');
const tasks = require('@cloudfour/gulp-tasks');
const config = require('../config');
const argv = require('yargs').argv;

// Register core tasks
const core = ['clean', 'js', 'serve', 'watch'];
core.forEach(name => tasks[name](gulp, config[name]));

// Register frontend composite task
gulp.task('frontend', done => {
    runSequence(
        ['css:lint', 'js:lint'],
        ['static:copy', 'drizzle'],
        ['sass:compile', 'sass:copy', 'js:copy', 'js:concat'],
        ['css:compress', 'js:compress'],
        done
    );
});

// Register build task (for continuous deployment via Netlify)
gulp.task('build', done => {
    runSequence('clean', 'frontend', done);
});

// Register default task
gulp.task('default', ['build'], done => {
    gulp.start('serve');

    if (argv.dev) {
        gulp.start('watch');
    }

    done();
});
