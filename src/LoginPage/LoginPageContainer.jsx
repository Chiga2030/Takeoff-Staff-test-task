import {
  connect,
} from 'react-redux';

import LoginPage from './LoginPage';


const LoginPageContainer = props => (
  <LoginPage loginedUser={ props.loginedUser }/>
);


export default connect(
  state => ({
    loginedUser: state.userList.loginedUser,
  })
)(LoginPageContainer);
