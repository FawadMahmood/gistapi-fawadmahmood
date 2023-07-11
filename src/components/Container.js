import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

export const Container = ({ children }) => (
  <ContainerStyled>{children}</ContainerStyled>
);

const ContainerStyled = styled.div`
  max-width: 702px;
  margin: auto;
`;

Container.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};
