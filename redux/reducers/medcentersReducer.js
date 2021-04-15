import { GET_CENTERS } from '../actionTypes';

const reducer = (state = [], action) => {
  switch (action.type) {
    case GET_CENTERS:
      return [...Object.values(action.payload)];
    default:
      return state;
  }
};

export default reducer;
