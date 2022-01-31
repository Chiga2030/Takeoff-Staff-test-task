import {
  SET_USER_DATA,
} from '../actions/setUserData';


const initialState = {
  users: [
    {
      name: 'Bret',
      isAuth: false,
    },
    {
      name: 'Antonette',
      isAuth: false,
    },
    {
      name: 'Samantha',
      isAuth: false,
    },
    {
      name: 'not exsist user',
      isAuth: false,
    },
  ],
  loginedUser: false,
};


export const userList = (state = initialState, action) => {
  switch (action.type) {
  case SET_USER_DATA: {
    return {
      ...state,
      loginedUser: action.payload,
    };

    break;
  }

  default:
    return {
      ...state,
    };
  };
};
