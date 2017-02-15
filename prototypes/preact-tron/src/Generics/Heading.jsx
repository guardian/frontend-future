/** @jsx h */

import { h } from 'preact';
import styled from 'styletron-react';

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
  const Heading = styled(level, () => ({
    fontSize: fontSizes[styleLevel] || fontSizes.default,
    fontWeight: 500,
    marginBottom: '15px',
    margin: 0,
  }));

  return (<Heading>{children}</Heading>);
};

export default HeadingComp;
