'use strict';
const config = require('../config').generateIconData;
const fs = require('fs');
const path = require('path');


function readDirRecursive(dir, subdir='') {
    let output = [];
    const files = fs.readdirSync(path.join(dir, subdir));
    files.forEach(f => {
        const stat = fs.statSync(path.join(dir, subdir, f));
        if (stat.isDirectory()) {
            output = [
                ...output,
                ...readDirRecursive(dir, path.join(subdir, f)),
            ];
        } else {
            output.push(path.join(subdir, f));
        }
    });
    return output;
}

// Generating icons info into json file
function generateIconData() {
    const iconData = readDirRecursive(config.src).map(f => ({
        src: f,
        name: f.replace(/^social\//,'').replace('/','-').replace(/\..+?$/,''),
    }));
    fs.writeFileSync(config.dest, JSON.stringify(iconData, null, 2));
}

module.exports = generateIconData;
