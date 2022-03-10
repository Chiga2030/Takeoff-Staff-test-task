import {
  useSelector,
} from 'react-redux';

import LoginPage from './LoginPage';


const LoginPageContainer = () => {
  const fetchStatus = useSelector(
    state => state.authUser.userInfo.fetchStatus);

  return (
    <LoginPage fetchStatus={ fetchStatus }/>
  );
};


export default LoginPageContainer;
