import React from 'react';
import Octicon from 'react-octicon';
import styled from 'styled-components';
import { convertDate, getFileCount } from '../../utils/helpers';
import PropTypes from 'prop-types';

export const Links = ({
  owner,
  files,
  comments_url,
  forks_url,
}) => {
  const { avatar_url, login } = owner || {};
  const fileCount = getFileCount(files);

  return(
    <LinksStyled>
      <LinkItem>
        <Octicon name="code" />
        <LinkInfo>{fileCount} File</LinkInfo>
      </LinkItem>
      <LinkItem href={forks_url} target="_blank">
        <Octicon name="repo-forked" />
        <LinkInfo>Forks</LinkInfo>
      </LinkItem>
      <LinkItem href={comments_url} target="_blank">
        <Octicon name="comment" />
        <LinkInfo>Comments</LinkInfo>
      </LinkItem>
    </LinksStyled>
  )
}


const LinksStyled = styled.div`
  gap: 15px;
  display: flex;
  color: #218bff;
`;

const AuthorName = styled.div`
  font-size: 16px;
`;

const LinkItem = styled.a`
  display: flex;
  text-decoration: none;
  gap: 5px;
  align-items: center;
  color: #218bff;
`;

const LinkInfo = styled.div`
  font-weight: bold;
`;


Links.propTypes = {
  owner: PropTypes.shape({
    avatar_url: PropTypes.string,
    login: PropTypes.string
  }).isRequired,
  files: PropTypes.any,
  comments_url: PropTypes.string
};
