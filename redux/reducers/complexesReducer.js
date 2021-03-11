import { GET_COMPLEXES } from '../actionTypes';

const reducer = (state = [], action) => {
  switch (action.type) {
    case GET_COMPLEXES:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default reducer;
