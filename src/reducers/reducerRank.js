import { ADD_PLAYER } from '../actions/addPlayerToRank';

const INITIAL_STATE = {
  players: [],
}

const reducerRank = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_PLAYER:
      return {
        ...state,
        players: [
          ...players,
          {
            avatar: action.avatar,
            name: action.name,
            score: action.score,
          }
        ]
      };
    default:
      return state;
  }
};

export default reducerRank;
