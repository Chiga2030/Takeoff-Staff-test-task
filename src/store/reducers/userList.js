import {
  SET_USER_DATA,
  SET_FETCH_USER_DATA_STATUS,
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
      loginedUser: {
        fetchStatus: 'success',
        ...action.payload,
      },
    };

    break;
  }


  case SET_FETCH_USER_DATA_STATUS: {
    return {
      ...state,
      loginedUser: {
        fetchStatus: action.payload,
      },
    };

    break;
  }


  default:
    return {
      ...state,
    };
  };
};
