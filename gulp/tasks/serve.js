const gulp = require('gulp');
const config = require('../config').serve;
const browserSync = require('browser-sync').create();

gulp.task('serve', () => {
    browserSync.init(config.plugins.browserSync);
});
