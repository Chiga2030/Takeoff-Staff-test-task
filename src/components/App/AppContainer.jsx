import {
  useSelector,
} from 'react-redux';

import App from './App';


const AppContainer = () => {
  const isAuth = useSelector(
    state => state.authUser.isAuth);
  console.log();

  return (
    <App isAuth={ isAuth } />
  );
};


export default AppContainer;
