/** @jsx h */

import { h } from 'preact';
import styled from 'styled-components';

import palette from 'utils/palette';

import FaciaCard from './FaciaCard/FaciaCard';

const Container = styled.div`
  margin-bottom: 25px;
  border-top: 1px solid ${palette.newsTone};
`;

export default ({ container }) => (
  <Container>
    <h2>{container.title}</h2>
    <ul className="prototype__fixed-width">
      {container.cardData.map(card => <FaciaCard card={card} />)}
    </ul>
  </Container>
  );
