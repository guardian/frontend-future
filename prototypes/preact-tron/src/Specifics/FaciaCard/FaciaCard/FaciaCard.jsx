/** @jsx h */
/* eslint react/prop-types: 0 */

import { h } from 'preact';

import Card from 'generics/Card';
import FaciaCardContent from '../FaciaCardContent/FaciaCardContent.jsx';

export default ({ card }) => (
  <Card tone={card.tone}>
    <FaciaCardContent
      headline={card.headline}
      kicker={card.kicker}
      standfirst={card.standfirst}
    />
  </Card>
  );
