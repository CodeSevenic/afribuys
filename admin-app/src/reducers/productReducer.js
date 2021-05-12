import { productConstants } from '../actions/constants';

const initialState = {
  products: [],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case productConstants.GET_ALL_PRODUCTS_SUCCESS:
      return { ...state, products: action.payload.products };
    default:
      return state;
  }
};
