import Container from 'react-bootstrap/Container';

import LoginFormContainer from '../LoginForm/LoginFormContainer';
import FetchSpinner from '../FetchSpinner/FetchSpinner';
import ProfileCardContainer from '../ProfileCard/ProfileCardContainer';


const LoginPage = ({
  fetchStatus,
}) => {
  const requestState = {
    success: <ProfileCardContainer />,
    request: <FetchSpinner />,
  };


  return (
    <Container className="d-flex h-100 align-items-center">
      { fetchStatus
        ? requestState[fetchStatus] : <LoginFormContainer /> }
    </Container>
  );
};


export default LoginPage;
