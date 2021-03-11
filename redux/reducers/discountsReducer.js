import { GET_DISCOUTNS } from '../actionTypes';

const reducer = (state = [], action) => {
  switch (action.type) {
    case GET_DISCOUTNS:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default reducer;
