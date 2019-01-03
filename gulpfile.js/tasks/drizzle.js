const drizzle = require('drizzle-builder');
const config = require('../config');
const helpers = require('@cloudfour/hbs-helpers');

// Append config
Object.assign(config.drizzle, { helpers });

// Register Drizzle builder task
function drizzleTask() {
    return drizzle(config.drizzle);
}

module.exports = drizzleTask;
