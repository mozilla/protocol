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

const protocolJSConfig = {
    devtool: false,
    entry: glob.sync('./assets/js/protocol/*.js').reduce((obj, el) => {
        const name = path.parse(el).name;
        obj[name] = el;
        obj[`${name}.min`] = el;
        return obj;
    }, {}),
    output: {
        path: path.resolve(__dirname, 'static/protocol/js'),
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

const protocolCSSConfig = {
    entry: {
        'protocol': path.resolve(__dirname, 'assets/sass/protocol/protocol.scss'),
        'protocol-components': path.resolve(__dirname, 'assets/sass/protocol/protocol-components.scss'),
    },
    output: {
        filename: 'temp/[name].js',
        path: path.resolve(__dirname, 'static/protocol/css'),
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

const fractalCSSConfig = {
    entry: {
        'theme': path.resolve(__dirname, 'theme/assets/sass/theme.scss'),
        'preview': path.resolve(__dirname, 'theme/assets/sass/preview.scss'),
    },
    output: {
        filename: 'temp/[name].js',
        path: path.resolve(__dirname, 'theme/static/css'),
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
                include: path.resolve(__dirname, 'theme/assets/sass'),
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
        new MiniCssExtractPlugin(),
    ]
};

const fractalJSConfig = {
    devtool: false,
    entry: {
        'bidi': path.resolve(__dirname, 'theme/assets/js/bidi.js'),
    },
    output: {
        path: path.resolve(__dirname, 'theme/static/js'),
        filename: '[name].js'
    },
    performance: {
        hints: 'warning'
    },
    optimization: {
        minimize: true
    }
};

module.exports = [protocolCSSConfig, protocolJSConfig, fractalCSSConfig, fractalJSConfig];
