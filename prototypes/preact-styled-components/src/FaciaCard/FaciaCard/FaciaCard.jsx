/** @jsx h */
/* eslint react/prop-types: 0 */

import { h } from 'preact';
import styled, { ThemeProvider } from 'styled-components';

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

const toneProvider = {
  news: {
    main: '#4bc6df',
  },
  opinion: {
    main: 'orange',
  },
  sport: {
    main: 'green',
  },
};

export default ({ card }) => {
  const theme = {
    main: toneProvider[card.tone].main,
  };

  return (
    <ThemeProvider theme={theme}>
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
              theme={theme}
            />
          </CardContainer>
        </CardItem>
      </SliceItem>
    </ThemeProvider>
  );
};
