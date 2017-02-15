/** @jsx h */

import { h } from 'preact';
import styled from 'styletron-react';

import palette from 'ds/palette';

const ContainerComp = ({ children, type = 'news' }) => {
  const Container = styled('div', {
    marginBottom: '25px',
    borderTop: `1px solid ${palette[type].main}`,
    padding: '10px 25px',
  });

  return (<Container>{children}</Container>);
};

export default ContainerComp;
