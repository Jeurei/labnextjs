import { GET_FEATURES, SET_FEATURES } from '../actionTypes';

const reducer = (state = [], action) => {
  switch (action.type) {
    case GET_FEATURES:
      return [...state, ...action.payload];
    case SET_FEATURES:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default reducer;
