import Container from 'react-bootstrap/Container';

import LoginFormContainer from '../LoginForm/LoginFormContainer';
import FetchSpinner from '../FetchSpinner/FetchSpinner';
import ProfileCardContainer from '../ProfileCard/ProfileCardContainer';
import FailedFetchInfoContainer
  from '../FailedFetchInfo/FailedFetchInfoContainer';


const LoginPage = ({
  fetchStatus,
}) => {
  const requestState = {
    success: <ProfileCardContainer />,
    request: <FetchSpinner />,
    fail: <FailedFetchInfoContainer />,
  };


  return (
    <Container className="d-flex h-100 align-items-center">
      { fetchStatus
        ? requestState[fetchStatus] : <LoginFormContainer /> }
    </Container>
  );
};


export default LoginPage;
