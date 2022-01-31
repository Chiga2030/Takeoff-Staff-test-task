import {
  connect,
} from 'react-redux';

import LoginForm from './LoginForm';


const LoginFormContainer = props => (
  <LoginForm
    users = { props.users }
  />
);


export default connect(
  state => ({
    users: state.userList.users,
  }),
)(LoginFormContainer);
