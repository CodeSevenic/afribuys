import { userConstants } from '../actions/constants';

const initialState = {
  address: [],
  orders: [],
  orderDetails: {},
  error: null,
  loading: false,
  orderFetching: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userConstants.GET_USER_ADDRESS_REQUEST:
      return { ...state, loading: true };
    case userConstants.GET_USER_ADDRESS_SUCCESS:
      return { ...state, address: action.payload.address, loading: false };
    case userConstants.GET_USER_ADDRESS_FAILURE:
      return { ...state, loading: false, error: action.payload.error };

    case userConstants.ADD_USER_ADDRESS_REQUEST:
      return { ...state, loading: true };
    case userConstants.ADD_USER_ADDRESS_SUCCESS:
      return { ...state, loading: false, address: action.payload.address };
    case userConstants.ADD_USER_ADDRESS_FAILURE:
      return { ...state, loading: false, error: action.payload.error };

    case userConstants.GET_USER_ORDER_REQUEST:
      return { ...state, orderFetching: true };
    case userConstants.GET_USER_ORDER_SUCCESS:
      return { ...state, orders: action.payload.orders, orderFetching: false };
    case userConstants.GET_USER_ORDER_FAILURE:
      return { ...state, error: action.payload.error, orderFetching: false };

    case userConstants.GET_USER_ORDER_DETAILS_REQUEST:
      return;
    case userConstants.GET_USER_ORDER_DETAILS_SUCCESS:
      return { ...state, orderDetails: action.payload.order };
    case userConstants.GET_USER_ORDER_DETAILS_FAILURE:
      return;

    default:
      return state;
  }
};
