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
            {
                test: /\.(css|scss)$/,
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
            {
                test: /\.html$/,
                exclude: /(node_modules)/,
                loader: 'colocate-loader',
                options: {
                    rules: [
                        {
                            test: /^style$/,
                            use: [
                                { loader: 'styletron-loader' },
                                {
                                    loader: 'sass-loader',
                                    options: {
                                        data: `@import '~sass-mq/_mq';`,
                                    },
                                },
                            ],
                        },
                        {
                            test: /^script$/,
                            loader: 'babel-loader',
                        },
                    ],
                },
            },
        ],
    },
    resolve: {
        modules: [
            path.join(__dirname, 'src'),
            'node_modules', // default location, but we're overiding above, so it needs to be explicit
        ],
        extensions: ['.js', '.html'],
    },
    resolveLoader: {
        modules: [path.resolve(__dirname, 'colocate-loader'), 'node_modules'],
    },
};
