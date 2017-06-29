// @flow
const path = require('path');
const webpackMerge = require('webpack-merge');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
    .BundleAnalyzerPlugin;

const config = require('./webpack.config.js');

module.exports = webpackMerge.smart(config, {
    entry: {
        'bundle.browser': path.join(__dirname, 'src', 'main.browser.jsx'),
        'bundle.server': path.join(__dirname, 'src', 'main.server.jsx'),
    },
    devtool: 'sourcemap',
    plugins: [
        new BundleAnalyzerPlugin({
            defaultSizes: 'gzip',
            reportFilename: path.join(
                __dirname,
                'dist',
                'bundle.browser.stats.html'
            ),
            analyzerMode: 'static',
            openAnalyzer: false,
        }),
    ],
});
