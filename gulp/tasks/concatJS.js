var gulp = require('gulp');
var concat = require('gulp-concat');
var plumber = require('gulp-plumber');
var handleErrors = require('../utils/handleErrors');
var config = require('../config').concatJS;

gulp.task('concatJS', ['cleanCss'], function() {
  // loop over the groups of files within the concatJs config object
  return Object.keys(config).forEach(function(key) {
    // grab the object associated with each key
    var val = config[key];
    // scripts are concatenated into files with the same name as the key
    return gulp.src(val.src)
      .pipe(plumber({ errorHandler: handleErrors }))
      .pipe(concat(key + '.js'))
      .pipe(gulp.dest(val.dest));
  });
});
