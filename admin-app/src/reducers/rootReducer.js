import { combineReducers } from 'redux';
import { loginReducer } from '../reducers/authReducers';

const rootReducer = combineReducers({
  login: loginReducer,
});

export default rootReducer;
