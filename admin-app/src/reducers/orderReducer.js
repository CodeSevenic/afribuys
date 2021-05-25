import { orderConstants } from '../actions/constants';

const initialState = {
  orders: [],
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case orderConstants.GET_CUSTOMER_ORDER_SUCCESS:
      return { ...state, orders: action.payload.orders };
    default:
      return state;
  }
};
