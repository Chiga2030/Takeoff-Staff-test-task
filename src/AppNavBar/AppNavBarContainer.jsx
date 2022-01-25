import {
  useContext,
} from 'react';
import {
  CurrentUserContext,
} from '../App';

import AppNavBar from './AppNavBar';


const AppNavBarContainer = () => {
  const currentUser = useContext(CurrentUserContext);


  return (
    <>
      <AppNavBar currentUser={ currentUser }/>
    </>
  );
};


export default AppNavBarContainer;
