import {
  configureStore,
} from '@reduxjs/toolkit';

import userListSlice from './reducers/userListSlice';
import authUserSlice from './reducers/authUserSlice';
import contactsSlice from './reducers/contactsSlice';


const store = configureStore({
  reducer: {
    userList: userListSlice,
    authUser: authUserSlice,
    contacts: contactsSlice,
  },
});


export default store;
