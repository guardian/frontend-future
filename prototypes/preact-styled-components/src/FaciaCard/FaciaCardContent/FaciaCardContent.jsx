/** @jsx h */
/* eslint react/prop-types: 0 */

import { h } from 'preact';
import classNames from 'classnames';

import styles, {
  fcItemContent,
  fcItemLink,
  fcItemHeader,
  fcItemTitle,
  fcItemStandfirst,
  fcItemKicker,
  fcItemHeadline,
  fcItemMeta,
  uFauxBlockLinkOverlay,
} from '../FaciaCard.scss';

const FaciaCardContent = ({ kicker, headline, standfirst, tone }) => {
  const headlineClasses = classNames(
    fcItemHeadline,
    tone ? styles[`fc-item-headline-${tone}`] : '',
  );

  return (
    <div className={fcItemContent}>
      <div className={fcItemHeader}>
        <h2 className={fcItemTitle}>
          <a href="https://www.theguardian.com/technology/2016/dec/14/yahoo-hack-security-of-one-billion-accounts-breached" className={fcItemLink} data-link-name="article">
            <span className={fcItemKicker}>{kicker}</span>

            <span className={headlineClasses}>
              <span className="js-headline-text">{headline}</span>
            </span>
          </a>
        </h2>
      </div>

      <div className={fcItemStandfirst}>
        {standfirst}
      </div>

      { /* Mount the meta data component into here client-side with data from attribute */ }
      <aside className={fcItemMeta} data-mountComponent="itemMeta" data-componentData="5" />

      {
        /* Mount the meta data component social into
        here client-side when we have data from ajax request */
      }
      <aside data-mountComponent="metaSocial" />

      <a href="https://www.theguardian.com/technology/2016/dec/14/yahoo-hack-security-of-one-billion-accounts-breached" className={uFauxBlockLinkOverlay} data-link-name="article" tabIndex="-1">{headline}</a>
    </div>
  );
};
export default FaciaCardContent;
