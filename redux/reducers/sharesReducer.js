import { GET_SHARES } from '../actionTypes';

const reducer = (state = [], action) => {
  switch (action.type) {
    case GET_SHARES:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default reducer;
