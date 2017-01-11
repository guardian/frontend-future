/** @jsx h */
/* eslint react/prop-types: 0 */

import { h } from 'preact';
import classNames from 'classnames/bind';

import Image from '../../Image/Image';
import FaciaCardContent from '../FaciaCardContent/FaciaCardContent.jsx';

import defaultStyles from './FaciaCard.css';
import newsStyles from './FaciaCardNews.css';
import opinionStyles from './FaciaCardOpinion.css';

const FaciaCard = ({ card }) => {
  let style;

  if (card.tone === 'news') {
    style = newsStyles;
  } else if (card.tone === 'opinion') {
    style = opinionStyles;
  }

  style = Object.assign(defaultStyles, style);

  return (
    <li className="u-faux-block-link">
      <div className={style['fc-item']}>
        <div className={style.container}>
          <div className="fc-item__media-wrapper">
            <Image />
          </div>
          <FaciaCardContent
            headline={card.headline}
            kicker={card.kicker}
            standfirst={card.standfirst}
          />
        </div>
      </div>
    </li>
  );
};
export default FaciaCard;
