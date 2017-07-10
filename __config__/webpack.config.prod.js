// @flow
const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
    .BundleAnalyzerPlugin;

const root = path.resolve(__dirname, '..');
const config = require('./webpack.config.js');

module.exports = webpackMerge.smart(config, {
    output: {
        library: 'frontend',
    },
    entry: {
        'bundle.browser': path.join(root, 'src', 'boot.browser.jsx'),
        'bundle.server': path.join(root, 'src', 'boot.server.jsx'),
    },
    devtool: 'sourcemap',
    plugins: [
        new BundleAnalyzerPlugin({
            defaultSizes: 'gzip',
            reportFilename: path.join(
                root,
                'dist',
                'bundle.browser.stats.html'
            ),
            analyzerMode: 'static',
            openAnalyzer: false,
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
        }),
    ],
});
