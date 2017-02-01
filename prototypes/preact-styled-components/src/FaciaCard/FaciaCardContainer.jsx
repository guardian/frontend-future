/** @jsx h */

import { h } from 'preact';
import styled from 'styled-components';

import Container from 'generics/Container';
import Heading from 'generics/Heading';

import FaciaCard from './FaciaCard/FaciaCard';

export default ({ container }) => (
  <Container type={container.containerType}>
    <Heading>{container.title}</Heading> {/* Headings default to level 2 */ }
    <Heading styleLevel={3}>{container.title}</Heading> {/* Heading 2 styled as heading 3 */}
    <ul className="prototype__fixed-width">
      {container.cardData.map(card => <FaciaCard card={card} />)}
    </ul>
  </Container>
  );
