import { productConstants } from '../actions/constants';

const initialState = {
  products: [],
  productsByPrice: {
    under5k: [],
    under10k: [],
    under15k: [],
    under20k: [],
    under30k: [],
  },
  pageRequest: false,
  page: {},
  error: null,
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case productConstants.GET_PRODUCTS_BY_SLUG:
      return {
        ...state,
        products: action.payload.products,
        productsByPrice: {
          ...action.payload.productsByPrice,
        },
      };

    case productConstants.GET_PRODUCTS_PAGE_REQUEST:
      return { ...state, pageRequest: true };

    case productConstants.GET_PRODUCTS_PAGE_SUCCESS:
      return { ...state, page: action.payload.page, pageRequest: false };

    case productConstants.GET_PRODUCTS_PAGE_FAILURE:
      return { ...state, pageRequest: false, error: action.payload.error };

    default:
      return state;
  }
};
