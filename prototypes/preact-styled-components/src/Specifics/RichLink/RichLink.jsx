/** @jsx h */

import { h } from 'preact';
import styled from 'styled-components';

import Card from 'generics/Card';
import Heading from 'generics/Heading';

const RichLink = styled.div`
  float: left;
`;

export default ({ tone, title }) => (
  <RichLink>
    <Card tone={tone}>
      <Heading>{title}</Heading>
    </Card>
  </RichLink>
);
