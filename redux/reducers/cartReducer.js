import { GET_CART, REMOVE_ITEM_FROM_CART } from '../actionTypes';

const cartInitialState = {};

const reducer = (state = cartInitialState, action) => {
  switch (action.type) {
    case GET_CART:
      return { ...state, ...action.payload };
    case REMOVE_ITEM_FROM_CART:
      return {
        ...[
          ...Object.values(state).slice(
            0,
            Object.values(state).findIndex((el) => el.id === action.payload),
          ),
          ...Object.values(state).slice(
            Object.values(state).findIndex((el) => el.id === action.payload) +
              1,
          ),
        ],
      };
    default:
      return state;
  }
};

export default reducer;
