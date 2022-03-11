import React from 'react';
import ReactDOM from 'react-dom';

import {
  Provider,
} from 'react-redux';
import store, {
  persistor,
} from './store/store';

import {
  PersistGate,
} from 'reduxjs-toolkit-persist/integration/react';

import AppContainer from './components/App/AppContainer';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <PersistGate loading={null} persistor={persistor}>
        <AppContainer />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
