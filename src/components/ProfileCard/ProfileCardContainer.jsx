import {
  useSelector,
  useDispatch,
} from 'react-redux';
import {
  onLogout,
} from '../../store/reducers/authUserSlice';

import ProfileCard from './ProfileCard';


const ProfileCardContainer = () => {
  const loginedUser = useSelector(
    state => state.authUser.userInfo);
  const dispatch = useDispatch(null);

  return (
    <ProfileCard
      loginedUser={ loginedUser }
      onLogout={ () => dispatch(onLogout()) }
    />
  );
};


export default ProfileCardContainer;
