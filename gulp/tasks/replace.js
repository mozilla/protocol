const gulp = require('gulp');
const config = require('../config').replace;
const handleErrors = require('../utils/handleErrors');
const plumber = require('gulp-plumber');
const replace = require('gulp-replace');

gulp.task('replace', () => {
    return gulp.src(config.src)
        .pipe(plumber({ errorHandler: handleErrors }))
        .pipe(replace(config.base, config.replacement))
        .pipe(gulp.dest(config.dest));
});
