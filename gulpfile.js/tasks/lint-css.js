'use strict';

const gulp = require('gulp');
const gulpStylelint = require('gulp-stylelint');
const config = require('../config').lintCss;
const styleLintConfig = require('../../stylelint.config');

function lintCSS() {
    return gulp.src(config.src)
        .pipe(gulpStylelint({
            config: styleLintConfig,
            reporters: [
                {formatter: 'string', console: true}
            ]
        }));
}

module.exports = lintCSS;
