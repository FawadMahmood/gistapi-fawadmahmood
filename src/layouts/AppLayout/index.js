import React from 'react';
import PropTypes from 'prop-types';

export const AppLayout = ({ Header, children }) => (
    <>
      {Header}
      {children}
    </>
);

AppLayout.propTypes = {
  Header: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};


