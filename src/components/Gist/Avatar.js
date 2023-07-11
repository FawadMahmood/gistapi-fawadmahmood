import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Avatar = ({ image }) => {
  return <AvatarStyled src={image} />;
};

const AvatarStyled = styled.img.attrs((props) => ({
  src: props.src
}))`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

Avatar.propTypes = {
  image: PropTypes.string.isRequired
};
