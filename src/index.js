import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { gistsSlice } from './stores';

// another approach can be we can 
// we can pass services as context which allow use services
// as const { api } = useServices()


const store = configureStore({
  reducer: {
    gists: gistsSlice,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

