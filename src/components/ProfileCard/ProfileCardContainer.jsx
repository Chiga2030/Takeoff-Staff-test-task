import {
  connect,
} from 'react-redux';
import {
  onLogout,
} from '../../store/actions/onLogout';

import ProfileCard from './ProfileCard';


const ProfileCardContainer = props => (
  <ProfileCard
    loginedUser={ props.loginedUser }
    onLogout={ props.onLogout }
  />
);


export default connect(
  state => ({
    loginedUser: state.userList.loginedUser,
  }),
  {
    onLogout,
  }
)(ProfileCardContainer);
