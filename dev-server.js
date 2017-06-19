/* @flow */

const express = require('express');
const server = express();
const fs = require('fs');

const { createBundleRenderer } = require('vue-server-renderer');
const bundle = require('./vue-ssr-server-bundle.json');

const renderer = createBundleRenderer(bundle, {
    runInNewContext: false,
    template: fs.readFileSync('./index.html', 'utf-8'),
});

server.get('*', function(req, res) {
    renderer.renderToString((err, html) => {
        if (err) console.log(err);
        res.end(html);
    });
});

const listener = server.listen(3000, () => {
    console.log('Your app is listening on port ' + listener.address().port);
});
