import { combineReducers } from 'redux';
import { loginReducer } from '../reducers/authReducers';
import { userReducer } from './userReducer';
import { productReducer } from './productReducer';
import { orderReducer } from './orderReducer';
import { categoryReducer } from './categoryReducer';

const rootReducer = combineReducers({
  loginState: loginReducer,
  user: userReducer,
  category: categoryReducer,
  product: productReducer,
  order: orderReducer,
});

export default rootReducer;
