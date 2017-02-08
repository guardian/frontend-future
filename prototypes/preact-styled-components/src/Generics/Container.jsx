/** @jsx h */

import { h } from 'preact';
import styled from 'styled-components';

import palette from 'ds/palette';

const ContainerComp = ({ children, type = 'news' }) => {
  const Container = styled.div`
    margin-bottom: 25px;
    border-top: 1px solid ${palette[type].main};
    padding: 10px 25px;
  `;

  return (<Container>{children}</Container>);
};

export default ContainerComp;
