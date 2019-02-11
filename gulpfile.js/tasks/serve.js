'use strict';

const config = require('../config').serve;
const browserSync = require('browser-sync').create();

function serve() {
    browserSync.init(config.plugins.browserSync);
}

module.exports = serve;
