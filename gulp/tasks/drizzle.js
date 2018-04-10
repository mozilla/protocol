const drizzle = require('drizzle-builder');
const gulp = require('gulp');
const config = require('../config');
const helpers = require('@cloudfour/hbs-helpers');

// Append config
Object.assign(config.drizzle, { helpers });

// Register Drizzle builder task
gulp.task('drizzle', () => {
  const result = drizzle(config.drizzle);
  return result;
});
