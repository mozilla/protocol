/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

/* eslint-env node, commonjs, es2017 */

const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const protocolStatic = {
    // main.js serves as an entrypoint for Webpack, but is not required
    // directly by any Protocol components.
    entry: path.resolve(__dirname, 'main.js'),
    output: {
        path: path.resolve(__dirname, 'static/protocol')
    },
    performance: {
        hints: 'warning'
    },
    devtool: false,
    plugins: [
        // Clean out ./static/protocol directory before processing.
        new CleanWebpackPlugin(),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'assets/fonts/'),
                    to: 'fonts/'
                },
                {
                    from: path.resolve(__dirname, 'node_modules/@mozilla-protocol/tokens/dist/'),
                    to: 'css/includes/tokens/dist/'
                },
                {
                    from: path.resolve(__dirname, 'node_modules/@mozilla-protocol/assets/'),
                    to: 'img/'
                },

            ]
        })
    ]
};

const fractalStatic = {
    // main.js serves as an entrypoint for Webpack, but is not required
    // directly by any Protocol components.
    entry: path.resolve(__dirname, 'main.js'),
    output: {
        path: path.resolve(__dirname, 'theme/static')
    },
    performance: {
        hints: 'warning'
    },
    devtool: false,
    plugins: [
        // Clean out ./theme/static directory before processing.
        new CleanWebpackPlugin(),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'theme/assets/img'),
                    to: 'img/'
                },
                {
                    from: path.resolve(__dirname, 'theme/assets/favicon.png'),
                    to: 'favicon.png'
                },
                // {
                //     from: path.resolve(__dirname, 'docs/404.html'),
                //     to: 'docs/404.html'
                // }
            ]
        })
    ]
};

module.exports = [protocolStatic, fractalStatic];
