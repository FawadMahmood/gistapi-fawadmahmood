import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Octicon from 'react-octicon'
import Search from './Search';
import { useDebounce } from '../hooks';
import { fetchGistsByUsername, fetchGists } from '.././stores/gists';
import { useDispatch } from 'react-redux';
 

function Header({ onSearchText }) {
  const dispatch = useDispatch();
  const [searchTerm, setSearchUsernameTerm] = useState('');
  const debouncedTerm = useDebounce(searchTerm, 300);

  useEffect(()=>{
    if(debouncedTerm){
      dispatch(fetchGistsByUsername(debouncedTerm));
    }else if(debouncedTerm !== undefined && debouncedTerm === ""){
      dispatch(fetchGists());
    }
  },[ debouncedTerm ]);


  return (
    <Wrapper>
      <Octicon name="mark-github" mega/>
      <Search onSearchText={setSearchUsernameTerm} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: #24292e;
  color: #ffffff;
  z-index: 32;
  padding: 16px;
  font-size: 14px;
  line-height: 1.5;
  display: flex;
  align-items: center;
`;

export default Header;
