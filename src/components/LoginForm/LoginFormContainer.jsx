import {
  useSelector,
  useDispatch,
} from 'react-redux';
import {
  setUserData,
  setFetchUserDataStatus,
} from '../../store/reducers/authUserSlice';

import LoginForm from './LoginForm';


const LoginFormContainer = () => {
  const users = useSelector(state => state.userList.users);
  const dispatch = useDispatch(null);

  return (
    <LoginForm
      users={ users }
      setUserData={ userData => dispatch(setUserData(userData)) }
      setFetchUserDataStatus={
        status => dispatch(setFetchUserDataStatus(status))
      }
    />
  );
};


export default LoginFormContainer;
