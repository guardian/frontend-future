const path = require('path');

const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

const config = require('./webpack.config.js');

module.exports = webpackMerge.smart(config, {
    entry: {
        client: path.join(__dirname, 'src', 'client.js'),
        server: path.join(__dirname, 'src', 'server.js'),
    }

    // entry: {
    //     'bundle.browser': [
    //         'webpack-hot-middleware/client',
    //         path.resolve(__dirname, 'src', 'main.browser.js'),
    //     ],
    // },
    // devtool: 'inline-source-map',
    // plugins: [
    //     new webpack.optimize.OccurrenceOrderPlugin(),
    //     new webpack.HotModuleReplacementPlugin(),
    //     new webpack.NoEmitOnErrorsPlugin(),
    // ],
});
