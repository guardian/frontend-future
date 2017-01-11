/** @jsx h */

import { h } from 'preact';

/** Hmm, React doesn't allow html comments so we can do our IE9 conditionals here - do we care?
<!--[if IE 9]><video style="display: none;"><![endif]-->
<!--[if IE 9]></video><![endif]-->
*/

const Image = () => (
  <div className="fc-item__image-container u-responsive-ratio inlined-image">
    <picture>
      <source media="(min-width: 980px) and (-webkit-min-device-pixel-ratio: 1.25), (min-width: 980px) and (min-resolution: 120dpi)" sizes="220px" srcSet="https://i.guim.co.uk/img/media/849294625d777a2810944a85a8af7d07752d3df9/0_102_4096_2458/master/4096.jpg?w=220&amp;q=20&amp;auto=format&amp;usm=12&amp;fit=max&amp;dpr=2&amp;s=f46cee161012621401f0f6d962506122 440w" />
      <source media="(min-width: 980px)" sizes="220px" srcSet="https://i.guim.co.uk/img/media/849294625d777a2810944a85a8af7d07752d3df9/0_102_4096_2458/master/4096.jpg?w=220&amp;q=55&amp;auto=format&amp;usm=12&amp;fit=max&amp;s=67983b697aff49d2c98245074af9ee17 220w" />
      <source media="(min-width: 740px) and (-webkit-min-device-pixel-ratio: 1.25), (min-width: 740px) and (min-resolution: 120dpi)" sizes="160px" srcSet="https://i.guim.co.uk/img/media/849294625d777a2810944a85a8af7d07752d3df9/0_102_4096_2458/master/4096.jpg?w=160&amp;q=20&amp;auto=format&amp;usm=12&amp;fit=max&amp;dpr=2&amp;s=23e38038db72b1c407bb13e4c7041ad5 320w" />
      <source media="(min-width: 740px)" sizes="160px" srcSet="https://i.guim.co.uk/img/media/849294625d777a2810944a85a8af7d07752d3df9/0_102_4096_2458/master/4096.jpg?w=160&amp;q=55&amp;auto=format&amp;usm=12&amp;fit=max&amp;s=a2dd33b97c1791b753b23de303a615ab 160w" />
      <source media="(min-width: 0px) and (-webkit-min-device-pixel-ratio: 1.25), (min-width: 0px) and (min-resolution: 120dpi)" sizes="127px" srcSet="https://i.guim.co.uk/img/media/849294625d777a2810944a85a8af7d07752d3df9/0_102_4096_2458/master/4096.jpg?w=127&amp;q=20&amp;auto=format&amp;usm=12&amp;fit=max&amp;dpr=2&amp;s=d8e5d716d327f3dbbd79d0824bedde9d 254w" />
      <source media="(min-width: 0px)" sizes="127px" srcSet="https://i.guim.co.uk/img/media/849294625d777a2810944a85a8af7d07752d3df9/0_102_4096_2458/master/4096.jpg?w=127&amp;q=55&amp;auto=format&amp;usm=12&amp;fit=max&amp;s=a0a096e824eed62c287ae9ffa3af710e 127w" />
      <img className="responsive-img" alt="" src="https://i.guim.co.uk/img/media/849294625d777a2810944a85a8af7d07752d3df9/0_102_4096_2458/master/4096.jpg?w=300&amp;q=55&amp;auto=format&amp;usm=12&amp;fit=max&amp;s=af1aad5e9179e2401935d8c626e2c461" />
    </picture>
  </div>
);

export default Image;
