import { userConstants } from '../actions/constants';

const initialState = {
  address: [],
  error: null,
  loading: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userConstants.GET_USER_ADDRESS_REQUEST:
      return { ...state, loading: true };
    case userConstants.GET_USER_ADDRESS_SUCCESS:
      return { ...state, address: action.payload.address, loading: false };
    case userConstants.GET_USER_ADDRESS_FAILURE:
      return { ...state, loading: false, error: action.payload.error };

    default:
      return state;
  }
};
