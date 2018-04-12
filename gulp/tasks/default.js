const gulp = require('gulp');
const tasks = require('@cloudfour/gulp-tasks');
const config = require('../config');
const env = require('gulp-util').env;

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
