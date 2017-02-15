/** @jsx h */

import { h } from 'preact';
// import FaciaCardContainer from 'specifics/FaciaCard/FaciaCardContainer';

import Heading from 'generics/Heading';

export default data => (
  <div>
    <Heading level={'h1'}>Preact with styled components</Heading>
    <Heading level={'h2'}>Testing the Rich link insertion and upgrade</Heading>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Recusandae consequuntur iure hic eaque tempora aspernatur odio facilis,
      natus dolorum excepturi eos, praesentium asperiores, qui quidem tempore.
      Totam error maxime vel.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Recusandae consequuntur iure hic eaque tempora aspernatur odio facilis,
      natus dolorum excepturi eos, praesentium asperiores, qui quidem tempore.
      Totam error maxime vel.
    </p>
    <div
      data-mountComponent="richLink"
      data-componentData={JSON.stringify({ title: 'Look at this awesome article!', tone: 'news' })}
    />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Recusandae consequuntur iure hic eaque tempora aspernatur odio facilis,
      natus dolorum excepturi eos, praesentium asperiores, qui quidem tempore.
      Totam error maxime vel.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Recusandae consequuntur iure hic eaque tempora aspernatur odio facilis,
      natus dolorum excepturi eos, praesentium asperiores, qui quidem tempore.
      Totam error maxime vel.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Recusandae consequuntur iure hic eaque tempora aspernatur odio facilis,
      natus dolorum excepturi eos, praesentium asperiores, qui quidem tempore.
      Totam error maxime vel.
    </p>
  </div>
  );
