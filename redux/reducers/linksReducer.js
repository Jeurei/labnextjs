import { GET_LINKS, SET_LINKS } from '../actionTypes';

const reducer = (state = [], action) => {
  switch (action.type) {
    case GET_LINKS:
      return [...state, ...Object.values(action.payload)];
    case SET_LINKS:
      return [...state, ...Object.values(action.payload)];
    default:
      return state;
  }
};

export default reducer;
