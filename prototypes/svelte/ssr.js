// @flow

import fs from 'fs';
import path from 'path';
import 'babel-plugin-external-helpers';

import svelteApp from './dist/app-ssr';
import cardData from '../data';

export default (req: express$Request, res: express$Response) => {
  const template = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf-8');

  const html = svelteApp.render(cardData);
  const { css } = svelteApp.renderCss();

  res.end(template.replace('/* CSS */', css).replace('<!-- HTML -->', html));
};
