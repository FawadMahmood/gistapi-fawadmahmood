import React from 'react';
import styled from 'styled-components';
import { Box } from './Box';
import { Avatar } from './Avatar';
import { Links } from './Links';
import PropTypes from 'prop-types';
import { convertDate } from '../../utils/helpers';
import Octicon from 'react-octicon';


const Gist = ({ owner, createdAt, forks_url, comments_url, updatedAt, files, description }) => {
  const { avatar_url, login } = owner || {};

  return(
    <Box>
      <Header>
        <UserInfoContainer>
          <Avatar image={avatar_url} />
          <UserName>{login}</UserName>
        </UserInfoContainer>
        <Links owner={owner} files={files} comments_url={comments_url} forks_url={forks_url} />
      </Header>
      <TimeStampSection>
        <TimeStamp>Created at : {convertDate(createdAt)}</TimeStamp>
        <TimeStamp>Updated at : {convertDate(updatedAt)}</TimeStamp>
      </TimeStampSection>
      <Description>{description}</Description>
      <FileStack>
        {Object.values(files).map(({ filename, raw_url }) => (
          <FileItem href={raw_url} target="_blank" key={filename}>
            <Octicon name="file-text" />
            <FileName>{filename}</FileName>
          </FileItem>
        ))}
      </FileStack>
    </Box>
  )
}

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;


const UserName = styled.div`
  font-size: 16px;
`;

const TimeStampSection = styled.div`
  display: flex;
  padding-top: 10px;
  gap: 10px;
`;

const TimeStamp = styled.div`
  font-size: 16px;
`;

const Description = styled.div`
  padding: 15px 0;
  overflow-wrap: break-word;
`;

const FileStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
`;

const FileItem = styled.a`
  display: flex;
  text-decoration: none;
  align-items: center;
`;

const FileName = styled.div`
  font-size: 16px;
  color: #218bff;
`;


Gist.propTypes = {
  owner: PropTypes.shape({
    avatar_url: PropTypes.string,
    login: PropTypes.string
  }).isRequired,
  createdAt: PropTypes.string.isRequired,
  updatedAt: PropTypes.string.isRequired,
  files: PropTypes.any,
  forks_url: PropTypes.string,
  comments_url: PropTypes.string,
  description: PropTypes.string
};


export default Gist;
