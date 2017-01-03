// @flow

import express from 'express';
import path from 'path';
import hbs from 'hbs';
import fs from 'fs';
import svelteApp from './prototypes/svelte/dist/app-ssr';

const app = express();

app.set('view engine', 'hbs');

// Serve the prototypes from a view
app.set('views', path.join(__dirname, '/prototypes'));
hbs.registerPartials(`${__dirname}/prototypes/plain/partials/`);

// Routes

app.get('/plain', (req, res) => res.render('plain/index'));

app.get('/svelte', (req, res) => {
  const template = fs.readFileSync(path.join(__dirname, 'prototypes/svelte/index.html'), 'utf-8');

  const html = svelteApp.render({
    cardData: [
      {
        kicker: 'Yahoo hack',
        headline: '1bn accounts compromised by biggest data breach in history',
        standfirst: 'The latest incident to emerge – which happened in 2013 – is probably distinct from the breach of 500m user accounts in 2014',
        tone: 'opinion',
        showKicker: false,
      },
      {
        kicker: 'Gareth hack',
        headline: '1 account compromised by smallest data breach in history',
        standfirst: 'The latest incident to emerge – which happened in 2016',
        tone: 'news--item',
        showKicker: true,
      },
    ],
  });
  const { css } = svelteApp.renderCss();

  res.end(template.replace('/* CSS */', css).replace('<!-- HTML -->', html));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(`${__dirname}/index.html`));
});

// Open up prototypes as static so we can serve css n js
app.use(express.static(`${__dirname}/prototypes/`));

app.listen(3000);
