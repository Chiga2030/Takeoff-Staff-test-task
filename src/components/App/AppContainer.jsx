import {
  useSelector,
} from 'react-redux';

import App from './App';


const AppContainer = () => {
  const isAuth = useSelector(
    state => state.authUser.isAuth);

  return (
    <App isAuth={ isAuth } />
  );
};


export default AppContainer;
