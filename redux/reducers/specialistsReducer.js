import { GET_SPECIALISTS } from '../actionTypes';

const reducer = (state = [], action) => {
  switch (action.type) {
    case GET_SPECIALISTS:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default reducer;
