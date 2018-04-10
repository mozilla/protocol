var gulp = require('gulp');
const tasks = require('@cloudfour/gulp-tasks');
var config = require('../config');

// Register core tasks
[
  'clean',
  'copy',
  'js',
  'serve',
  'watch'
].forEach(name => tasks[name](gulp, config[name]));


gulp.task('default', ['drizzle', 'replace', 'sass', 'reset', 'cleanCss', 'concatJS', 'uglify'], done => {
  gulp.start('serve');
  if (env.dev) {
    gulp.start('watch');
  }
  done();
});

gulp.task('lint', ['lintCss']);
