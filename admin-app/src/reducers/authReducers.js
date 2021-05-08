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
      return (state = { ...state, authenticating: true });

    default:
      return state;
  }
};
