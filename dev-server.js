/* @flow */

const express = require('express');
const server = express();
const fs = require('fs');
const webpack = require('webpack');
const resolve = file => require('path').resolve(__dirname, file);

const { createBundleRenderer } = require('vue-server-renderer');
const clientConfig = require('./webpack.config.client');
const serverBundle = require('./dist/vue-ssr-server-bundle.json');
let clientManifest = require('./dist/vue-ssr-client-manifest.json');
let bundle;


const serve = (path, cache) => express.static(resolve(path), {
    maxAge: 0
});

const renderer = createBundleRenderer(serverBundle, {
    runInNewContext: false,
    template: fs.readFileSync('./index.html', 'utf-8'),
    clientManifest
});

const clientCompiler = webpack(clientConfig);
const devMiddleware = require('webpack-dev-middleware')(clientCompiler, {
    publicPath: '/dist/',
    noInfo: true
});

server.use(devMiddleware);
server.use(require('webpack-hot-middleware')(clientCompiler, { heartbeat: 5000 }));
server.use('/dist', serve('./dist', true));
server.get('*', function(req, res) {
    renderer.renderToString((err, html) => {
        if (err) console.log(err);
        res.end(html);
    });
});



const listener = server.listen(3000, () => {
    console.log('Your app is listening on port ' + listener.address().port);
});
