import React from 'react';
import ReactDOM from 'react-dom';

import {
  Provider,
} from 'react-redux';
import store from './store/store';

import AppContainer from './App/AppContainer';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
