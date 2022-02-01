import {
  connect,
} from 'react-redux';
import {
  onLogout,
} from '../../store/actions/onLogout';

import FailedFetchInfo from './FailedFetchInfo';


const FailedFetchInfoContainer = props => (
  <FailedFetchInfo
    errorDescription={ props.errorDescription }
    onLogout={ props.onLogout }
  />
);

// Failed to fetch

export default connect(
  state => ({
    errorDescription: state.userList.loginedUser.statusDescription,
  }),
  {
    onLogout,
  }
)(FailedFetchInfoContainer);
