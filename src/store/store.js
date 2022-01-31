import {
  createStore,
} from 'redux';
import reducer from './reducers/rootReducer';


/* eslint-disable no-underscore-dangle */
const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__
  && window.__REDUX_DEVTOOLS_EXTENSION__();
/* eslint-enable */

const store = createStore(reducer, reduxDevtools);

export default store;
