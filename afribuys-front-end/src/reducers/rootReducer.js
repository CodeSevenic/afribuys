import { combineReducers } from 'redux';
import { categoryReducer } from './categoryReducer';
import { productReducer } from './productReducer';
import { authReducer } from './authReducer';
import { cartReducer } from './cartReducer';
import { userReducer } from './userReducer';

const rootReducer = combineReducers({
  category: categoryReducer,
  product: productReducer,
  auth: authReducer,
  cart: cartReducer,
  user: userReducer,
});

export default rootReducer;
