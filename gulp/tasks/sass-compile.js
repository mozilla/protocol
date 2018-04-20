const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const config = require('../config').sassCompile;
const handleErrors = require('../utils/handleErrors');
const autoprefixer = require('gulp-autoprefixer');
const plumber = require('gulp-plumber');
const merge = require('merge-stream');
const moduleImporter = require('sass-module-importer');

// Compile the main Protocol Sass file(s) to CSS.
gulp.task('sass:compile', () => {
    let tasks = [];

    Object.keys(config).forEach((key) => {
        let val = config[key];
        tasks.push(gulp.src(val.src)
            .pipe(sass({ importer: moduleImporter() }))
            .pipe(plumber({ errorHandler: handleErrors }))
            .pipe(sourcemaps.init())
            .pipe(sass(config.settings))
            .pipe(autoprefixer({ browsers: ['last 2 version']}))
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest(val.dest)));
    });

    return merge(tasks);
});
