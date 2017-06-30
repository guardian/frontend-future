// @flow
/* eslint-disable import/no-extraneous-dependencies, no-console */

const path = require('path');
const { readFileSync } = require('fs');

const express = require('express');
const webpack = require('webpack');
const createWebpackMiddleware = require('webpack-dev-middleware');
const createWebpackHotMiddleware = require('webpack-hot-middleware');

const root = path.resolve(__dirname, '..');
const webpackConfig = require('../__config__/webpack.config.dev.js');

const compiler = webpack(webpackConfig);
const app = express();

app.get('/', (request, response) => {
    /* eslint-disable no-eval */
    response.send(`<!DOCTYPE html>
        ${eval(
            readFileSync(path.resolve(root, 'dist', 'bundle.server.js'), 'utf8')
        ).default}`);
    /* eslint-enable no-eval */
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
