/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

/* eslint-env node, commonjs, es2017 */

const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// Copy static assets to the `./package/ directory for publishing.
module.exports = {
    // main.js serves as an entrypoint for Webpack, but is not required
    // directly by any Protocol components.
    entry: path.resolve(__dirname, 'src/main.js'),
    output: {
        path: path.resolve(__dirname, 'package')
    },
    performance: {
        hints: 'warning'
    },
    devtool: false,
    plugins: [
        // Clean out ./package directory before processing.
        new CleanWebpackPlugin(),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/assets/sass/protocol'),
                    to: 'protocol/css/',
                    transform: (content) => {
                        // This is required so that _lib.scss can load the tokens package
                        // using a relative @import, as opposed to the main Protocol package
                        // needing to distribute its own set of node_modules dependencies.
                        return content.toString().replace('./node_modules/@mozilla-protocol/', '');
                    }
                },
                {
                    from: path.resolve(__dirname, 'src/assets/fonts/'),
                    to: 'protocol/fonts/'
                },
                {
                    from: path.resolve(__dirname, 'src/assets/package/')
                },
                {
                    from: path.resolve(__dirname, 'node_modules/@mozilla-protocol/tokens/dist/'),
                    to: 'protocol/css/includes/tokens/dist/'
                },
                {
                    from: path.resolve(__dirname, 'node_modules/@mozilla-protocol/assets/'),
                    to: 'protocol/img/'
                }
            ]
        })
    ]
};
