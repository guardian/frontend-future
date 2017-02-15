/** @jsx h */
/* eslint react/prop-types: 0 */

import { h } from 'preact';
import styled, { ThemeProvider } from 'styled-components';

import Image from 'generics/Image';

import palette from 'ds/palette';

export default ({ tone, children }) => {
  const theme = {
    main: palette[tone].main,
  };

  const SliceItem = styled.li`
    display: flex;
    padding-right: 5px;
    border-right: 1px solid #ccc;
    margin-right: 5px;

    &:last-child {
      border-right: 0 none;
    }
  `;

  const CardItem = styled.div`
    width: 220px;
    background-color: #f6f6f6; /* $story-package tone */
  `;

  const CardContainer = styled.div`
    position: relative;

    &:before {
        content: '';
        background-color: ${theme.main};
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 0.0625rem;
        z-index: 2;
    }
  `;

  return (
    <SliceItem>
      <CardItem>
        <CardContainer>
          <Image />
          <ThemeProvider theme={theme}>
            {children}
          </ThemeProvider>
        </CardContainer>
      </CardItem>
    </SliceItem>
  );
};
