'use strict';

const del = require('del');
const config = require('../config').clean;

function clean(cb) {
    del([config.dest]).then(() => {
        cb();
    });
}

module.exports = clean;
