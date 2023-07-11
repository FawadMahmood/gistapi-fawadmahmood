import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Box = ({ children }) => {
  return <BoxStyled>{children}</BoxStyled>;
};

const BoxStyled = styled.div`
  padding: 20px 0 30px 0;
  border-bottom: 1px solid #e4e2e2;
`;

Box.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};
