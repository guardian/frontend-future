// @flow

import express from 'express';
import path from 'path';
import hbs from 'hbs';
import fs from 'fs';

import svelteApp from './prototypes/svelte/dist/app-ssr';
import preactSsr from './prototypes/preact/dist/assets/ssr';

import cardData from './prototypes/data';

const app = express();


app.set('view engine', 'hbs');

// Serve the prototypes from a view
app.set('views', path.join(__dirname, '/prototypes'));
hbs.registerPartials(`${__dirname}/prototypes/plain/partials/`);

// Routes

app.get('/plain', (req: express$Request, res: express$Response) => res.render('plain/index'));

app.get('/svelte', (req: express$Request, res: express$Response) => {
  const template = fs.readFileSync(path.join(__dirname, 'prototypes/svelte/index.html'), 'utf-8');

  const html = svelteApp.render(cardData);
  const { css } = svelteApp.renderCss();

  res.end(template.replace('/* CSS */', css).replace('<!-- HTML -->', html));
});

// on each request, render and return a component:
app.get('/preact', preactSsr);


app.get('/', (req: express$Request, res: express$Response) => res.sendFile(path.join(`${__dirname}/index.html`)));

// Open up prototypes as static so we can serve css n js
app.use(express.static(`${__dirname}/prototypes/`));

app.listen(3000);
