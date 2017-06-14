const path = require('path');
const { readFileSync } = require('fs');

const express = require('express');
const webpack = require('webpack');
const createWebpackMiddleware = require('webpack-dev-middleware');
const createWebpackHotMiddleware = require('webpack-hot-middleware');

const webpackConfig = require('./webpack.config.dev.js');

const compiler = webpack(webpackConfig);
const app = express();

app.get('/', (request, response) => {
    response.send(`<!DOCTYPE html>
        ${eval(
            readFileSync(
                path.resolve(__dirname, 'dist', 'bundle.server.js'),
                'utf8'
            )
        ).default}`);
});

const webpackDevMiddleware = createWebpackMiddleware(compiler, {
    quiet: true,
    noInfo: true,
    headers: {
        'Access-Control-Allow-Origin': '*',
    },
    publicPath: '/',
});
app.use(webpackDevMiddleware);
app.use(createWebpackHotMiddleware(compiler));
app.listen(3000, () => console.log('App listening on http://localhost:3000'));

// const webpack = require('webpack');
// const WebpackDevServer = require('webpack-dev-server');

// const webpackConfig = require('./webpack.config.dev');

// const compiler = webpack(webpackConfig);
// const devServer = new WebpackDevServer(compiler, {
//     hot: true,
//     setup(app) {
//         app.get('/', (request, response) => {
//             response.send(`
// <!DOCTYPE html>
// ${eval(readFileSync('./dist/bundle.server.js', 'utf8')).default}
//             `);
//         });
//     },
// });

// devServer.listen(3000, () => {
//     console.log('Listening on port 3000!');
// });
