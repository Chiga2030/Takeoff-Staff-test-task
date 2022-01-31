import {
  connect,
} from 'react-redux';

import AppNavBar from './AppNavBar';


const AppNavBarContainer = props => (
  <AppNavBar loginnedUser={ props.loginnedUser }/>
);


export default connect(
  state => ({
    loginnedUser: state.userList.loginedUser.name,
  })
)(AppNavBarContainer);
