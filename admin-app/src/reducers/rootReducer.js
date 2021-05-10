import { combineReducers } from 'redux';
import { loginReducer } from '../reducers/authReducers';
import { userReducer } from './userReducer';

const rootReducer = combineReducers({
  loginState: loginReducer,
  user: userReducer,
});

export default rootReducer;
