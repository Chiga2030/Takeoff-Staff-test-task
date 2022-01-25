import {
  useContext,
} from 'react';
import {
  UsersContext,
} from '../App/AppContainer';

import LoginPage from './LoginPage';


const LoginPageContainer = () => {
  const users = useContext(UsersContext);

  return (
    <LoginPage users={ users } />
  );
};


export default LoginPageContainer;
