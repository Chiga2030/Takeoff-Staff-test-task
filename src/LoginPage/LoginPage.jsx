import {
  useState,
} from 'react';

import Container from 'react-bootstrap/Container';

import ProfileCard from '../ProfileCard/ProfileCard';
import LoginFormContainer from '../LoginForm/LoginFormContainer';


const LoginPage = () => {
  const [
    isAuth,
    // setIsAuth,
  ] = useState(false);

  return (
    <div className="d-flex h-100 align-items-center">
      <Container className=" ">
        { !isAuth ? <LoginFormContainer /> : <ProfileCard /> }
      </Container>
    </div>
  );
};


export default LoginPage;
