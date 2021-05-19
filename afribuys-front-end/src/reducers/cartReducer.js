import { cartConstants } from '../actions/constants';

const initialState = {
  cartItems: {},
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case cartConstants.ADD_TO_CART:
      return { ...state, cartItems: action.payload.cartItems };
    default:
      return state;
  }
};
