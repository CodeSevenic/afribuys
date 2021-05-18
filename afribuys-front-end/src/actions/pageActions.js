import axiosInstance from '../helpers/axios';
import { productConstants } from './constants';

export const getProductPage = (payload) => {
  return async (dispatch) => {
    try {
      const { cid, type } = payload.params;
      const res = await axiosInstance.get(`/page/${cid}/${type}`);
      dispatch({ type: productConstants.GET_PRODUCTS_PAGE_REQUEST });

      if (res.status === 200) {
        const { page } = res.data;
        dispatch({
          type: productConstants.GET_PRODUCTS_PAGE_SUCCESS,
          payload: { page },
        });
      } else {
        const { page } = res.data;
        dispatch({
          type: productConstants.GET_PRODUCTS_PAGE_FAILURE,
          payload: { page },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
