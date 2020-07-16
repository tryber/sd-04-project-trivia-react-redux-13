import { ADD_DATA } from '../actions';

const initialState = {
  data: [],
};

const reducerData = () => {
  switch (action.type) {
    case ADD_DATA:
      return { ...state, data: [ ...state.data, action.data ] };
    default:
      return state;
  }
};

export default reducerData;
