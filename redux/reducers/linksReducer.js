import { GET_LINKS } from '../actionTypes';

const reducer = (state = [], action) => {
  switch (action.type) {
    case GET_LINKS:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default reducer;
