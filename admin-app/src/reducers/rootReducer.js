import { combineReducers } from 'redux';
import { loginReducer } from '../reducers/authReducers';

const rootReducer = combineReducers({
  loginState: loginReducer,
});

export default rootReducer;
