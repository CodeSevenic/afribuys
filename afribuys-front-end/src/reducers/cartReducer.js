import { cartConstants } from '../actions/constants';

const initialState = {
  cartItems: {},
  updatingCart: false,
  error: null,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case cartConstants.ADD_TO_CART_REQUEST:
      return {
        ...state,
        updatingCart: true,
      };

    case cartConstants.ADD_TO_CART_SUCCESS:
      return {
        ...state,
        cartItems: action.payload.cartItems,
        updatingCart: false,
      };
    case cartConstants.ADD_TO_CART_FAILURE:
      return {
        ...state,
        updatingCart: false,
        error: action.payload.error,
      };
    case cartConstants.RESET_CART:
      return { ...initialState };

    default:
      return state;
  }
};
