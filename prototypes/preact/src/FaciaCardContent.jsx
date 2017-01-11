/** @jsx h */
/* eslint react/prop-types: 0 */

import { h } from 'preact';

const FaciaCardContent = ({ kicker, headline, standfirst }) => (
  <div className="fc-item__content">
    <div className="fc-item__header">
      <h2 className="fc-item__title">
        <a href="https://www.theguardian.com/technology/2016/dec/14/yahoo-hack-security-of-one-billion-accounts-breached" className="fc-item__link" data-link-name="article">
          <span className="fc-item__kicker">{kicker}</span>

          <span className="u-faux-block-link__cta fc-item__headline">
            <span className="js-headline-text">{headline}</span>
          </span>
        </a>
      </h2>
    </div>

    <div className="fc-item__standfirst">
      {standfirst}
    </div>

    { /* Mount the meta data component into here client-side with data from attribute */ }
    <aside className="fc-item__meta js-item__meta" data-componentData="5" />

    { /* Mount the meta data component social into here client-side when we have data from ajax request */ }
    <aside className="fc-item__meta js-item__meta--social" />

    <a href="https://www.theguardian.com/technology/2016/dec/14/yahoo-hack-security-of-one-billion-accounts-breached" className="u-faux-block-link__overlay js-headline-text" data-link-name="article" tabIndex="-1">{headline}</a>
  </div>
);

export default FaciaCardContent;
