/** @jsx h */
/* eslint react/prop-types: 0 */

import { h } from 'preact';
import classNames from 'classnames';

import Image from '../../Image/Image';
import FaciaCardContent from '../FaciaCardContent/FaciaCardContent.jsx';

import styles from '../FaciaCard.scss';

const FaciaCard = ({ card }) => {
  const containerClasses = classNames(
    styles.container,
    card.tone ? styles[`container-${card.tone}`] : '',
  );

  const sliceClasses = classNames(
    styles.uFauxBlockLink,
    styles.sliceItem,
  );

  return (
    <li className={sliceClasses}>
      <div className={styles.fcItem}>
        <div className={containerClasses}>
          <div>
            <Image />
          </div>
          <FaciaCardContent
            headline={card.headline}
            kicker={card.kicker}
            standfirst={card.standfirst}
            tone={card.tone}
          />
        </div>
      </div>
    </li>
  );
};
export default FaciaCard;
