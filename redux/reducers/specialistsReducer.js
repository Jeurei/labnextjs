import {
  GET_SPECIALISTS,
  SET_SPECIALIST,
  SET_SPECIALISTS,
} from '../actionTypes';

const reducer = (state = [], action) => {
  switch (action.type) {
    case GET_SPECIALISTS:
      return [...Object.values(action.payload)];
    case SET_SPECIALISTS:
      return [...action.payload];
    case SET_SPECIALIST:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default reducer;
