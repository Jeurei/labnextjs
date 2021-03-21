import { GET_ROUTES, GET_ROUTES_IN_BURGER } from '../actionTypes';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ROUTES:
      return { ...state, routes: action.payload };
    case GET_ROUTES_IN_BURGER:
      return { ...state, burger: action.payload };
    default:
      return state;
  }
};

export default reducer;
