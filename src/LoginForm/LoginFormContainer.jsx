import {
  connect,
} from 'react-redux';
import {
  setUserData,
  setFetchUserDataStatus,
} from '../store/actions/setUserData';

import LoginForm from './LoginForm';


const LoginFormContainer = props => (
  <LoginForm
    users={ props.users }
    setUserData={ props.setUserData }
    setFetchUserDataStatus={ props.setFetchUserDataStatus }
  />
);


export default connect(
  state => ({
    users: state.userList.users,
  }),
  {
    setUserData,
    setFetchUserDataStatus,
  }
)(LoginFormContainer);
