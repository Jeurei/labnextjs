import { GET_CITIES, SET_CURRENT_CITY } from '../actionTypes';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case GET_CITIES:
      return { ...state, ...action.payload };
    case SET_CURRENT_CITY:
      return {
        ...state,
        currentCity: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
