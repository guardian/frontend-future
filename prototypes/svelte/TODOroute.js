import fs from 'fs';
import svelteApp from './prototypes/svelte/dist/app-ssr';
import path from 'path';
import 'babel-plugin-external-helpers';

export default function (app) {
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
}
