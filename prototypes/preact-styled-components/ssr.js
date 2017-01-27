import render from 'preact-render-to-string';
import styleSheet from 'styled-components/lib/models/StyleSheet';

import template from './template';
import FaciaCardContainer from './src/FaciaCard/FaciaCardContainer';

import cardData from '../data';


export default (req, res) => {
  const html = render(FaciaCardContainer(cardData));
  const styles = styleSheet.rules().map(rule => rule.cssText).join('\n');
  res.end(template({
    body: html,
    title: 'From the server',
    styles,
  }));
};
