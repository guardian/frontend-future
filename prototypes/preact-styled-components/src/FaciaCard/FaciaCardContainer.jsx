/** @jsx h */

import { h } from 'preact';
import FaciaCard from './FaciaCard/FaciaCard';

export default ({ container }) => (
  <div>
    <h2>{container.title}</h2>
    <ul className="prototype__fixed-width">
      {container.cardData.map(card => <FaciaCard card={card} />)}
    </ul>
  </div>
  );
