const gulp = require('gulp');
const gulpStylelint = require('gulp-stylelint');
const config = require('../config').lintCss;
const styleLintConfig = require('../../stylelint.config');

gulp.task('css:lint', () => {
    return gulp
        .src(config.src)
        .pipe(gulpStylelint({
            config: styleLintConfig,
            reporters: [
                {formatter: 'string', console: true}
            ]
        }));
});
