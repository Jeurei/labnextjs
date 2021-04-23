import { GET_DISCOUTNS, SET_DISCOUNTS } from '../actionTypes';

const reducer = (state = [], action) => {
  switch (action.type) {
    case GET_DISCOUTNS:
      return [...Object.values(action.payload)];
    case SET_DISCOUNTS:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default reducer;
