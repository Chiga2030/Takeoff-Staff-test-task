import {
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'reduxjs-toolkit-persist';

import storage from 'reduxjs-toolkit-persist/lib/storage';

import userListSlice from './reducers/userListSlice';
import authUserSlice from './reducers/authUserSlice';
import contactsSlice from './reducers/contactsSlice';


const persistConfig = {
  key: 'root',
  storage,
  blacklist: [
    'userList',
  ],
};


const rootReducer = combineReducers({
  userList: userListSlice,
  authUser: authUserSlice,
  contacts: contactsSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => (
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER,
        ],
      },
    })
  ),
});


export const persistor = persistStore(store);

export default store;
