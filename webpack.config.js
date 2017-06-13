const path = require('path');

module.exports = {
    entry: {
        index: path.join(__dirname, 'src', 'index.js'),
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'output.js',
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
    devServer: {
        publicPath: '/',
        contentBase: path.join(__dirname, 'dist'),
        port: 8080,
        stats: 'verbose',
    },
};
