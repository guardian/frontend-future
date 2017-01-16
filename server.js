// @flow

import express from 'express';
import path from 'path';
import hbs from 'hbs';

import svelteSsr from './prototypes/svelte/ssr';
import preactSsr from './prototypes/preact/dist/assets/ssr';

const app = express();


app.set('view engine', 'hbs');

// Serve the prototypes from a view
app.set('views', path.join(__dirname, '/prototypes'));
hbs.registerPartials(`${__dirname}/prototypes/plain/partials/`);

// Routes

app.get('/plain', (req: express$Request, res: express$Response) => res.render('plain/index'));
app.get('/svelte', svelteSsr);
app.get('/preact', preactSsr);
app.get('/', (req: express$Request, res: express$Response) => res.sendFile(path.join(`${__dirname}/index.html`)));

// Open up prototypes as static so we can serve css n js
app.use(express.static(`${__dirname}/prototypes/`));

app.listen(3000);
