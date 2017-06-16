const path = require('path');

const nodeExternals = require('webpack-node-externals');
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin');

module.exports = {
    entry: path.join(__dirname, 'src', 'index.js'),

    target: 'node',

    devtool: 'source-map',

    output: {
        path: path.resolve(__dirname),
        filename: 'bundle.server.js',
        libraryTarget: 'commonjs2',
    },

    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    cssModules: {
                        localIdentName:
                            '[path][name]---[local]---SIMON',
                        camelCase: true,
                    },
                },
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
        ],
    },

    externals: nodeExternals({
        whitelist: /\.(css|vue)$/,
    }),


    plugins: [new VueSSRServerPlugin()],
};
