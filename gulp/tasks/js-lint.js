const gulp = require('gulp');
const eslint = require('gulp-eslint');

gulp.task('js:lint', () => {
    return gulp.src(['**/*.js', '!dist/**', '!src/assets/js/site/vendor/**', '!node_modules/**', '!bower_components/**'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});
