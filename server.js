// @flow

import express from 'express';
import path from 'path';
import hbs from 'hbs';

const app = express();

app.set('view engine', 'hbs');

// Serve the prototypes from a view
app.set('views', path.join(__dirname, '/prototypes'));
hbs.registerPartials(`${__dirname}/prototypes/plain/partials/`);

app.get('/', (req, res) => res.sendFile(path.join(`${__dirname}/index.html`)));

app.get('/plain', (req, res) => {
  res.render('plain/index');
});

app.listen(3000);
