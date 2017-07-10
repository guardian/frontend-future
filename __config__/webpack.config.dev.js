// @flow
const path = require('path');

const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

const config = require('./webpack.config.js');

module.exports = webpackMerge.smart(config, {
    entry: {
        'bundle.browser': [
            'webpack-hot-middleware/client?reload=true',
            path.resolve(__dirname, '..', 'src', 'boot.browser.jsx'),
        ],
    },
    devtool: 'inline-source-map',
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
    ],
});
