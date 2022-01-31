import Container from 'react-bootstrap/Container';

import ProfileCard from '../ProfileCard/ProfileCard';
import LoginFormContainer from '../LoginForm/LoginFormContainer';


const LoginPage = ({
  loginedUser,
}) => {
  const requestState = {
    success: <ProfileCard loginedUser={ loginedUser } />,
    request: 'LOADING',
  };


  return (
    <div className="d-flex h-100 align-items-center">
      <Container>
        { loginedUser
          ? requestState[loginedUser.fetchStatus] : <LoginFormContainer /> }
      </Container>
    </div>
  );
};


export default LoginPage;
