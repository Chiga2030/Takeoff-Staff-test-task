import {
  connect,
} from 'react-redux';

import LoginPage from './LoginPage';


const LoginPageContainer = props => (
  <LoginPage fetchStatus={ props.fetchStatus }/>
);


export default connect(
  state => ({
    fetchStatus: state.userList.loginedUser.fetchStatus,
  })
)(LoginPageContainer);
