import { authConstants } from '../actions/constants';

const initialState = {
  name: 'Sibusiso',
};

export const loginReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case authConstants.LOGIN_REQUEST:
      return (state = { ...state, ...action.payload });

    default:
      return state;
  }
};
