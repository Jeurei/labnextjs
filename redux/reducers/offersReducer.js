import { GET_OFFERS } from '../actionTypes';

const reducer = (state = [], action) => {
  switch (action.type) {
    case GET_OFFERS:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default reducer;
