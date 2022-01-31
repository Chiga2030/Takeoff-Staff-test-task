export const SET_USER_DATA = 'SET_USER_DATA';
export const SET_FETCH_USER_DATA_STATUS = 'SET_FETCH_USER_DATA_STATUS';


export const setUserData = userData => ({
  type: SET_USER_DATA,
  payload: userData,
});

export const setFetchUserDataStatus = (status, description) => ({
  type: SET_FETCH_USER_DATA_STATUS,
  payload: {
    status,
    description,
  },
});
