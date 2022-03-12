import {
  useSelector,
  useDispatch,
} from 'react-redux';
import {
  onLogout,
} from '../../store/reducers/authUserSlice';

import FailedFetchInfo from './FailedFetchInfo';


const FailedFetchInfoContainer = () => {
  const errorDescription = useSelector(
    state => state.authUser.userInfo.statusDescription);
  const dispatch = useDispatch(null);

  return (
    <FailedFetchInfo
      errorDescription={ errorDescription }
      onLogout={ () => dispatch(onLogout()) }
    />
  );
};

// Failed to fetch

export default FailedFetchInfoContainer;
