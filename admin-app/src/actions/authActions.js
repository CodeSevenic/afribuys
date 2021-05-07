import { authConstants } from './constants';

export const login = (user) => (dispatch) => {
  dispatch({ type: authConstants.LOGIN_REQUEST, payload: { login: true } });
};
