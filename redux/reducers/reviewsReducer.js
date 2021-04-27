import { GET_REVIEWS } from '../actionTypes';

const reducer = (state = [], action) => {
  switch (action.type) {
    case GET_REVIEWS:
      return [...state, ...Object.values(action.payload)];
    default:
      return state;
  }
};

export default reducer;
