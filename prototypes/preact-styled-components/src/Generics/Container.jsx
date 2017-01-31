/** @jsx h */

import { h } from 'preact';
import { PropTypes } from 'react';
import styled from 'styled-components';

import palette from 'utils/palette';

const ContainerComp = ({ children, type = 'news' }) => {
  const Container = styled.div`
    margin-bottom: 25px;
    border-top: 1px solid ${palette[type].main};
  `;

  return (<Container>{children}</Container>);
};

export default ContainerComp;

ContainerComp.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.string,
};
