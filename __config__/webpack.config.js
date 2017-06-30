// @flow
const path = require('path');

const root = path.resolve(__dirname, '..');

module.exports = {
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
            path.resolve(root, 'src'),
            path.resolve(root, 'src', 'app'),
            'node_modules', // default location, but we're overiding above, so it needs to be explicit
        ],
        extensions: ['.js', '.jsx'],
    },
};
