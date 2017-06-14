// @flow
const path = require('path');

module.exports = {
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        chunkFilename: `[name].js`,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
            },
        ],
    },
    resolve: {
        modules: [
            path.join(__dirname, 'src'),
            'node_modules', // default location, but we're overiding above, so it needs to be explicit
        ],
        alias: {
            components: path.join(__dirname, 'src', 'components'),
            layout: path.join(__dirname, 'src', 'layout'),
            lib: path.join(__dirname, 'src', 'lib'),
            pasteup: path.join(__dirname, 'src', 'pasteup'),
        },
    },
};
