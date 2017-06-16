/* @flow */

var express = require('express');
var server = express();

const { createBundleRenderer } = require('vue-server-renderer');
const bundle = require('./vue-ssr-server-bundle.json');

const renderer = createBundleRenderer(bundle, {
    runInNewContext: false,
    template: require('fs').readFileSync('./index.html', 'utf-8'),
});

server.get('*', function(request, response) {
    renderer.renderToString({ url: request.url }, (err, html) => {
        if (err) console.log(err);
        response.end(html);
    });
});

const listener = server.listen(3000, () => {
    console.log('Your app is listening on port ' + listener.address().port);
});
