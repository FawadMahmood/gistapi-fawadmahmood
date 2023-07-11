
import React, { useEffect } from 'react';
import styled from 'styled-components'
import Header from "./components/Header";
import GlobalStyles from "./GlobalStyle";
import { useSelector, useDispatch } from 'react-redux';
import { fetchGists } from './stores/gists';
import { AppLayout } from './layouts';

const App = () => {
  return (
    <Wrapper className="App" data-testid="app">
      <AppLayout Header={<Header />}>
        
      </AppLayout>
      <GlobalStyles />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-size: 14px;
  line-height: 1.5;
`;

export default App;
