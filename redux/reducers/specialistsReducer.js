import {
  GET_SPECIALISTS,
  SET_SPECIALIST,
  SET_SPECIALISTS,
} from '../actionTypes';

const reducer = (state = [], action) => {
  switch (action.type) {
    case GET_SPECIALISTS:
      return [...state, ...Object.values(action.payload)];
    case SET_SPECIALISTS:
      return [...state, ...action.payload];
    case SET_SPECIALIST:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default reducer;
