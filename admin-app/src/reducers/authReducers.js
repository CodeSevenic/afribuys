import { authConstants } from '../actions/constants';

const initialState = {
  token: null,
  user: {
    name: '',
    surname: '',
    email: '',
    picture: '',
  },
  authenticate: false,
  authenticating: false,
};

export const loginReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case authConstants.LOGIN_REQUEST:
      return { ...state, authenticating: true };
    case authConstants.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        authenticate: true,
        authenticating: false,
      };
    case authConstants.LOGOUT_REQUEST:
      return { ...initialState };

    default:
      return state;
  }
};
