import {
  createSlice,
} from '@reduxjs/toolkit';


const initialState = {
  users: [
    {
      name: 'Bret',
    },
    {
      name: 'Antonette',
    },
    {
      name: 'Samantha',
    },
    {
      name: 'not exsist user',
    },
  ],
};


const userListSlice = createSlice({
  name: 'userList',
  initialState,
});


export default userListSlice.reducer;
