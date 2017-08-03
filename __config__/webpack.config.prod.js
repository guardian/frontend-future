const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
    .BundleAnalyzerPlugin;

const { ui } = require('./paths');

const commonConfig = require('./webpack.config.js');

module.exports = [
    webpackMerge.smart(commonConfig({ server: true }), {
        plugins: [
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify('production'),
            }),
            new webpack.optimize.UglifyJsPlugin({
                mangle: false,
                beautify: true,
            }),
        ],
    }),
    webpackMerge.smart(commonConfig({ browser: true }), {
        devtool: 'sourcemap',
        output: {
            path: path.join(ui, 'dist'),
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify('production'),
            }),
            new webpack.optimize.ModuleConcatenationPlugin(),
            new webpack.optimize.OccurrenceOrderPlugin(),
            new webpack.optimize.UglifyJsPlugin({
                sourceMap: true,
            }),
            new BundleAnalyzerPlugin({
                defaultSizes: 'gzip',
                reportFilename: path.join(
                    ui,
                    'dist',
                    'ui.bundle.browser.stats.html'
                ),
                analyzerMode: 'static',
                openAnalyzer: false,
            }),
        ],
    }),
];
