// @flow

import express from 'express';
import path from 'path';

const app = express();

// Serve the prototypes from a static folder
app.use(express.static('prototypes'));

app.get('/', (req, res) => res.sendFile(path.join(`${__dirname}/index.html`)));

app.listen(3000);
