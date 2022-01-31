import {
  connect,
} from 'react-redux';
import {
  setUserData,
} from '../store/actions/setUserData';

import LoginForm from './LoginForm';


const LoginFormContainer = props => (
  <LoginForm
    users={ props.users }
    setUserData={ props.setUserData }
  />
);


export default connect(
  state => ({
    users: state.userList.users,
  }),
  {
    setUserData,
  }
)(LoginFormContainer);
