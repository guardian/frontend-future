/** @jsx h */
/* eslint react/prop-types: 0 */

import { h } from 'preact';
import styled from 'styled-components';

import Image from '../../Image/Image';
import FaciaCardContent from '../FaciaCardContent/FaciaCardContent.jsx';

const SliceItem = styled.li`
  display: flex;
  padding-right: 5px;
  border-right: 1px solid #ccc;
  margin-right: 5px;
`;

const CardItem = styled.div`
  width: 220px;
  background-color: #f6f6f6; /* $story-package tone */
`;

const CardContainer = styled.div`
  position: relative;

  &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 0.0625rem;
      z-index: 2;
  }
`;

export default ({ card }) =>
  <SliceItem>
    <CardItem>
      <CardContainer>
        <div>
          <Image />
        </div>
        <FaciaCardContent
          headline={card.headline}
          kicker={card.kicker}
          standfirst={card.standfirst}
          tone={card.tone}
        />
      </CardContainer>
    </CardItem>
  </SliceItem>;
