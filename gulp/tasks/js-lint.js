const gulp = require('gulp');
const eslint = require('gulp-eslint');
const config = require('../config').lintJS;

gulp.task('js:lint', () => {
    return gulp.src(config.src)
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});
