import { GET_ARTICLES, SET_ARTICLES } from '../actionTypes';

const reducer = (state = [], action) => {
  switch (action.type) {
    case GET_ARTICLES:
      return [...state, ...action.payload];
    case SET_ARTICLES:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default reducer;
