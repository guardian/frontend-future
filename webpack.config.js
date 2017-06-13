const path = require('path');

module.exports = {
    entry: {
        index: path.join(__dirname, 'src', 'index.js'),
    },
    devtool: 'sourcemap',
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
        contentBase: path.join(__dirname),
    },
};
