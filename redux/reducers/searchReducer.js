import { GET_SEARCH_CATEGORIES } from '../actionTypes';

const reducer = (state = [], action) => {
  switch (action.type) {
    case GET_SEARCH_CATEGORIES:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default reducer;
