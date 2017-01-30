/** @jsx h */

import { h } from 'preact';
import FaciaCardContainer from '../FaciaCard/FaciaCardContainer';

export default data => (
  <body>
    <h1>Preact with styled components</h1>
    {data.containers.map(container => <FaciaCardContainer container={container} />)}
  </body>
  );
