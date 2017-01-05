import render from 'preact-render-to-string';

import template from './template';
import FaciaCardContainer from './src/FaciaCardContainer.jsx';

import cardData from '../data';

export default (req, res) => {
  const html = render(FaciaCardContainer(cardData));

  res.end(template({
    body: html,
    title: 'From the server',
  }));
};
