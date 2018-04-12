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

// Register frontend composite task
gulp.task('frontend', [
  'drizzle',
  'replace',
  'sass',
  'reset',
  'cleanCss',
  'concatJS',
  'uglify'
]);

// Register build task (for continuous deployment via Netlify)
gulp.task('build', ['clean'], done => {
  gulp.start('frontend');
  done();
});

// Register default task
gulp.task('default', ['frontend'], done => {
  gulp.start('serve');
  if (env.dev) {
    gulp.start('watch');
  }
  done();
});

gulp.task('lint', ['css:lint']);
