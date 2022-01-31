import Container from 'react-bootstrap/Container';

import LoginFormContainer from '../LoginForm/LoginFormContainer';
import FetchSpinner from '../FetchSpinner/FetchSpinner';
import ProfileCard from '../ProfileCard/ProfileCard';


const LoginPage = ({
  loginedUser,
}) => {
  const requestState = {
    success: <ProfileCard loginedUser={ loginedUser } />,
    request: <FetchSpinner />,
  };


  return (
    <Container className="d-flex h-100 align-items-center">
      { loginedUser
        ? requestState[loginedUser.fetchStatus] : <LoginFormContainer /> }
    </Container>
  );
};


export default LoginPage;
