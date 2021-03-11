import { GET_ARTICLES } from '../actionTypes';

const reducer = (state = [], action) => {
  switch (action.type) {
    case GET_ARTICLES:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default reducer;
