/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

/* eslint-env node, commonjs, es2017 */

const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');
const TerserPlugin = require('terser-webpack-plugin');
const glob = require('glob');
const path = require('path');

// Create both uncompressed and minified JS assets for each file in directory.
const jsConfig = {
    devtool: false,
    entry: glob.sync('./src/assets/js/protocol/*.js').reduce((obj, el) => {
        const name = path.parse(el).name;
        obj[name] = el;
        obj[`${name}.min`] = el;
        return obj;
    }, {}),
    output: {
        path: path.resolve(__dirname, 'package/protocol/js'),
        filename: '[name].js'
    },
    performance: {
        hints: 'warning'
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                parallel: true,
                include: /\.min\.js$/,
                extractComments: false
            }),
        ],
    }
};

// Create both uncompressed and minified CSS assets for standard Protocol libraries.
const cssConfig = {
    entry: {
        'protocol': path.resolve(__dirname, 'src/assets/sass/protocol/protocol.scss'),
        'protocol.min': path.resolve(__dirname, 'src/assets/sass/protocol/protocol.scss'),
        'protocol-components': path.resolve(__dirname, 'src/assets/sass/protocol/protocol-components.scss'),
        'protocol-components.min': path.resolve(__dirname, 'src/assets/sass/protocol/protocol-components.scss'),
    },
    output: {
        filename: 'temp/[name].js',
        path: path.resolve(__dirname, 'package/protocol/css'),
    },
    devtool: 'source-map',
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin({
                include: /\.min\.css$/
            }),
        ],
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                include: path.resolve(__dirname, 'src/assets/sass/protocol'),
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            url: false,
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ]
            }
        ]
    },
    performance: {
        hints: 'warning'
    },
    plugins: [
        // Remove empty JS files that are left over once CSS has been extracted.
        new RemoveEmptyScriptsPlugin(),
        new MiniCssExtractPlugin()
    ]
};

module.exports = [cssConfig, jsConfig];
