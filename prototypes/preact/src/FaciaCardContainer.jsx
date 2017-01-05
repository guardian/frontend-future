/** @jsx h */

import { h } from 'preact';
import FaciaCard from './FaciaCard.jsx';

export default data => (
  <ul className="prototype__fixed-width">
    {data.cardData.map(card => <FaciaCard card={card} />)}
  </ul>
  );
