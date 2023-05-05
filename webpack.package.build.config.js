/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

/* eslint-env node, commonjs, es2017 */

const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');
const path = require('path');
const jsEntryPoints = require('./webpack.entrypoints.js');

// Create UMD formatted scripts from ES source modules.
const jsConfig = {
    devtool: false,
    entry: jsEntryPoints,
    output: {
        path: path.resolve(__dirname, 'package/protocol/js'),
        filename: '[name].js'
    },
    performance: {
        hints: 'warning'
    },
    optimization: {
        minimize: false
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'assets/js/protocol'),
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/preset-env',
                                {
                                    targets: {
                                        ie: '10'
                                    }
                                }
                            ]
                        ]
                    }
                }
            },
        ]
    }
};

// Create both uncompressed and minified CSS assets for standard Protocol libraries.
const cssConfig = {
    entry: {
        'protocol': path.resolve(__dirname, 'assets/sass/protocol/protocol.scss'),
        'protocol-components': path.resolve(__dirname, 'assets/sass/protocol/protocol-components.scss'),
    },
    output: {
        filename: 'temp/[name].js',
        path: path.resolve(__dirname, 'package/protocol/css'),
    },
    devtool: 'source-map',
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
        ],
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                include: path.resolve(__dirname, 'assets/sass/protocol'),
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
