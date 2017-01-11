/** @jsx h */

import { h } from 'preact';
import FaciaCard from './FaciaCard/FaciaCard';

export default data => (
  <ul className="prototype__fixed-width">
    {data.cardData.map(card => <FaciaCard card={card} />)}
  </ul>
  );
