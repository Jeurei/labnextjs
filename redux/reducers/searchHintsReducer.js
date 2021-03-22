import { GET_SEARCH_HINTS, SET_SEARCH_HINTS } from '../actionTypes';

const reducer = (state = [], action) => {
  switch (action.type) {
    case GET_SEARCH_HINTS:
      return [...state, ...action.payload];
    case SET_SEARCH_HINTS:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default reducer;
