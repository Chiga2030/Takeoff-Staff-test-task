import {
  useSelector,
} from 'react-redux';

import AppNavBar from './AppNavBar';


const AppNavBarContainer = () => {
  const loginedUser = useSelector(state => state.authUser.userInfo.name);

  return (
    <AppNavBar loginedUser={ loginedUser }/>
  );
};


export default AppNavBarContainer;
