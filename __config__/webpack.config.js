// @flow
const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

const root = path.resolve(__dirname, '..');

const commonConfig = {
    output: {
        path: path.join(root, 'dist'),
        filename: '[name].js',
        chunkFilename: `[name].js`,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'styletron-loader' },
                    {
                        loader: 'sass-loader',
                        options: {
                            // prepended to all sass files
                            data: `
                                @import '~sass-mq/_mq';
                            `,
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        modules: [
            path.resolve(root, 'src'),
            path.resolve(root, 'src', 'app'),
            'node_modules', // default location, but we're overiding above, so it needs to be explicit
        ],
        extensions: ['.js', '.jsx'],
    },
    plugins: [new webpack.optimize.ModuleConcatenationPlugin()],
};

module.exports = [
    webpackMerge.smart(commonConfig, {
        entry: {
            'bundle.server': [path.join(root, 'src', 'boot.server.jsx')],
        },
        output: {
            library: 'frontend',
        },
    }),
    webpackMerge.smart(commonConfig, {
        entry: {
            'bundle.browser': [path.join(root, 'src', 'boot.browser.jsx')],
        },
    }),
];
