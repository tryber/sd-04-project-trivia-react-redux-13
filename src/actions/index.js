export const ADD_USERS = 'ADD_USER';
export const ADD_DATA = 'ADD_DATA';

export const actionAddUsers = (user) => ({
  type: ADD_USERS,
  user,
});

export const actionAddData = (data) => ({
  type: ADD_DATA,
  data,
});
