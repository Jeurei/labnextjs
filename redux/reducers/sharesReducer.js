import { GET_SHARES, SET_SHARES } from '../actionTypes';

const reducer = (state = [], action) => {
  switch (action.type) {
    case GET_SHARES:
      return [...state, ...Object.values(action.payload)];
    case SET_SHARES:
      return [...state, ...Object.values(action.payload)];
    default:
      return state;
  }
};

export default reducer;
