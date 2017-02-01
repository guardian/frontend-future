/** @jsx h */

import { h } from 'preact';
import FaciaCardContainer from '../FaciaCard/FaciaCardContainer';

import Heading from 'generics/Heading';

export default data => (
  <div>
    <Heading level={'h1'}>Preact with styled components</Heading>
    {data.containers.map(container => <FaciaCardContainer container={container} />)}
  </div>
  );
