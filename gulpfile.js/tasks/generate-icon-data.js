'use strict';
const config = require('../config').generateIconData;
const fs = require('fs');
const path = require('path');


function readDirRecursive(dir, subdir='', key='general icons') {
    let output = {
        [key]:{
            files:[],
            subsets:[]
        }
    };

    const files = fs.readdirSync(path.join(dir, subdir));
    files.forEach(f => {
        const stat = fs.statSync(path.join(dir, subdir, f));
        if (stat.isDirectory()) {
            output[key].subsets.push(readDirRecursive(dir, path.join(subdir, f), f));
        } else {
            const data = {
                src:path.join(subdir, f),
                name:f
            };
            output[key].files.push(data);
        }
    });
    return output;
}

// Generating icons info into json file
function generateIconData(cb) {
    const iconData = readDirRecursive(config.src);
    fs.writeFileSync(config.dest, JSON.stringify(iconData, null, 2));
    cb();
}

module.exports = generateIconData;
