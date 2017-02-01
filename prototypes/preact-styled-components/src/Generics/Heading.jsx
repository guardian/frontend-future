/** @jsx h */

import { h } from 'preact';
import { PropTypes } from 'react';
import styled from 'styled-components';

const fontSizes = {
  1: '2em',
  2: '1.5em',
  default: '1em',
};

const styleLevels = {
  h1: 1,
  h2: 2,
};

const HeadingComp = ({ children, level = 'h2', styleLevel = styleLevels[level] }) => {
  const Heading = styled[level]`
    margin-bottom: 15px;
    font-size: ${fontSizes[styleLevel] || fontSizes.default};
  `;

  return (<Heading>{children}</Heading>);
};

export default HeadingComp;

HeadingComp.propTypes = {
  children: PropTypes.string.isRequired,
  level: PropTypes.integer,
  styleLevel: PropTypes.integer,
};
