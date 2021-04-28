import { GET_CONFIG } from '../actionTypes';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case GET_CONFIG:
      return { ...action.payload.globalConfig };
    default:
      return state;
  }
};

export default reducer;
