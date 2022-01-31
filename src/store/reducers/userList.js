import {
  ACTION,
} from '../actions/action';


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
};


export const userList = (state = initialState, action) => {
  switch (action.type) {
  case ACTION: {
    const newStore = [
      ...action.payload,
    ];

    return {
      ...state,
      items: [
        ...newStore,
      ],
    };

    break;
  }

  default:
    return {
      ...state,
    };
  };
};
