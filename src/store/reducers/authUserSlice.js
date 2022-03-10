import {
  createSlice,
} from '@reduxjs/toolkit';


const initialState = {
  userInfo: false,
  isAuth: false,
};


const authUserSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    setUserData (state, action) {
      state.userInfo = {
        fetchStatus: 'success',
        ...action.payload,
      };

      state.isAuth = true;
    },

    setFetchUserDataStatus (state, action) {
      state.userInfo = {
        fetchStatus: action.payload.status,
        statusDescription: action.payload.description,
      };
    },

    onLogout (state) {
      state.userInfo = false;
      state.isAuth = false;
    },
  },
});


export const {
  setUserData,
  setFetchUserDataStatus,
  onLogout,
} = authUserSlice.actions;

export default authUserSlice.reducer;
