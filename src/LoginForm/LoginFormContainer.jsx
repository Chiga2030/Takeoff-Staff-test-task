import {
  useContext,
} from 'react';
import {
  UsersContext,
} from '../App/AppContainer';

import LoginForm from './LoginForm';


const LoginFormContainer = () => {
  const users = useContext(UsersContext);

  return (
    <LoginForm
      users={ users }
    />
  );
};


export default LoginFormContainer;
