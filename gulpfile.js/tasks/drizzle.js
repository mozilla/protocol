'use strict';

const drizzle = require('drizzle-builder');
const config = require('../config');
const helpers = require('@cloudfour/hbs-helpers');
const Handlebars = require('handlebars');

// Register handlebars helpers
function renderIcons(iconData, depth=2){
    let output = '';
    Object.keys(iconData)
        .forEach( (key) => {
            output += `<h${depth} class="icon-title">${key}</h${depth}>`;
            iconData[key].files.forEach( (file) => {
                output += `<div class="img-group" title="Click to copy file path" data-clipboard-text="img/icons/${file.src}"><img src="/assets/protocol/protocol/img/icons/${file.src}" class="icons"/>`;
                output += `<p class="icon-name">${file.name}</p><p class="copied">Copied!</p></div>`;
            });
            iconData[key].subsets.forEach((subset) => {
                output += renderIcons(subset, (depth<4) ? depth+1 : 4);
            });
        });
    return new Handlebars.SafeString(output);
}


// Append config
Object.assign(config.drizzle, { helpers: Object.assign({}, helpers, {
    renderIcons: iconData => renderIcons(iconData)
})});

// Register Drizzle builder task
function drizzleTask() {
    return drizzle(config.drizzle);
}

module.exports = drizzleTask;
