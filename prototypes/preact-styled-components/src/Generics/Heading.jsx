/** @jsx h */

import { h } from 'preact';
import { PropTypes } from 'react';
import styled from 'styled-components';

const fontSizes = {
  1: '36px',
  2: '20px',
  default: '16px',
};

const styleLevels = {
  h1: 1,
  h2: 2,
};

const HeadingComp = ({ children, level = 'h2', styleLevel = styleLevels[level] }) => {
  const Heading = styled[level]`
    font-size: ${fontSizes[styleLevel] || fontSizes.default};
    font-weight: 500;
    margin-bottom: 15px;
    margin: 0;
  `;

  return (<Heading>{children}</Heading>);
};

export default HeadingComp;

HeadingComp.propTypes = {
  children: PropTypes.string.isRequired,
  level: PropTypes.integer,
  styleLevel: PropTypes.integer,
};
