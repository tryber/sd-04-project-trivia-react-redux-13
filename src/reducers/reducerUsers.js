import { ADD_USERS } from '../actions';

const initialState = {
  users: [],
};

const reducerUsers = (state = initialState, action) => {
  console.log(state)
  switch (action.type) {
    case ADD_USERS:
      return { ...state, users: [ ...state.users, action.user ] };
    default:
      return state;
  }
};

export default reducerUsers;
