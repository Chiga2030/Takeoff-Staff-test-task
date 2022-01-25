import {
  createContext,
} from 'react';

import App from './App';


const initialUsers = [
  {
    name: 'Bret',
    isAuth: false,
  },
  {
    name: 'Antonette',
    isAuth: false,
  },
  {
    name: 'Samantha',
    isAuth: true,
  },
  {
    name: 'not exsist user',
    isAuth: false,
  },
];


export const UsersContext = createContext(initialUsers);
export const CurrentUserContext = createContext('user from props');


const AppContainer = () => (
  <App />
);


export default AppContainer;
