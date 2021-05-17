import { pageConstants } from '../actions/constants';

const initialState = {
  error: null,
  loading: false,
  page: {},
};

export const pageReducer = (state = initialState, action) => {
  switch (action.type) {
    case pageConstants.CREATE_PAGE_REQUEST:
      return { ...state, loading: true };
    case pageConstants.CREATE_PAGE_SUCCESS:
      return { ...state, loading: false };
    case pageConstants.CREATE_PAGE_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
};
