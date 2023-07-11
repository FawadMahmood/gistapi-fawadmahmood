import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '../../components/Container';

export const AppLayout = ({ Header, children }) => (
    <>
      {Header}
      <Container>{children}</Container>
    </>
);

AppLayout.propTypes = {
  Header: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};


