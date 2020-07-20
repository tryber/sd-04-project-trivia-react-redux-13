import { USER_ADD } from '../actions';

const initialState = {
  users: [],
};

const reducerUsers = (state = initialState, action) => {
  console.log(state)
  switch (action.type) {
    case USER_ADD:
      return { ...state, users: [ ...state.users, action.user ] };
    default:
      return state;
  }
};

export default reducerUsers;
