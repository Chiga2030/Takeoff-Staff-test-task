import {
  connect,
} from 'react-redux';

import AppNavBar from './AppNavBar';


const AppNavBarContainer = props => (
  <AppNavBar loginedUser={ props.loginedUser }/>
);


export default connect(
  state => ({
    loginedUser: state.userList.loginedUser.name,
  })
)(AppNavBarContainer);
