import { GET_ROUTES } from '../actionTypes';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ROUTES:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default reducer;
