/* @flow */
/** @jsx h */

import { h } from 'preact';
import render from 'preact-render-to-string';

import Styletron from 'styletron-server';
import { StyletronProvider } from 'styletron-react';

import template from './template';
import FaciaPage from './src/Template/FaciaPage';

import cardData from './data';

export default (req: express$Request, res: express$Response) => {
  const styletron = new Styletron();

  const html = render(
    <StyletronProvider styletron={styletron}>
      {FaciaPage(cardData)}
    </StyletronProvider>,
    );

  const styles = styletron.getStylesheetsHtml();

  res.end(template({
    body: html,
    title: 'From the server',
    styles,
  }));
};
