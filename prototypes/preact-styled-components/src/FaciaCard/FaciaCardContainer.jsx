/** @jsx h */

import { h } from 'preact';
import styled from 'styled-components';

import Container from 'generics/Container';

import FaciaCard from './FaciaCard/FaciaCard';

export default ({ container }) => (
  <Container type={container.containerType}>
    <h2>{container.title}</h2>
    <ul className="prototype__fixed-width">
      {container.cardData.map(card => <FaciaCard card={card} />)}
    </ul>
  </Container>
  );
