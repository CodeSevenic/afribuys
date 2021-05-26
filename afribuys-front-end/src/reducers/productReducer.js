import { productConstants } from '../actions/constants';

const initialState = {
  products: [],
  priceRange: {},
  productsByPrice: {},
  pageRequest: false,
  page: {},
  error: null,
  productDetails: {},
  loading: false,
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case productConstants.GET_PRODUCTS_BY_SLUG:
      return {
        ...state,
        products: action.payload.products,
        priceRange: action.payload.priceRange,
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

    case productConstants.GET_PRODUCT_DETAILS_BY_ID_REQUEST:
      return { ...state, loading: true };
    case productConstants.GET_PRODUCT_DETAILS_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        productDetails: action.payload.productDetails,
      };
    case productConstants.GET_PRODUCT_DETAILS_BY_ID_FAILURE:
      return { ...state, loading: false, error: action.payload.error };

    default:
      return state;
  }
};
