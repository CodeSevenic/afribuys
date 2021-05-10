import { userConstants } from '../actions/constants';

const initialState = {
  error: null,
  message: '',
  loading: false,
};

export const userReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case userConstants.USER_REGISTER_REQUEST:
      return { ...state, loading: true };
    case userConstants.USER_REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload.message,
      };

    default:
      return state;
  }
};
