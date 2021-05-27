import axiosInstance from '../helpers/axios';
import { productConstants } from './constants';

export const getProducts = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: productConstants.GET_ALL_PRODUCTS_REQUEST });
      const res = await axiosInstance.get(`product/getProducts`);
      if (res.status === 200) {
        const { products } = res.data;
        dispatch({
          type: productConstants.GET_ALL_PRODUCTS_SUCCESS,
          payload: { products },
        });
      } else {
        const { error } = res.data;
        dispatch({
          type: productConstants.GET_ALL_PRODUCTS_FAILURE,
          payload: { error },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const addProduct = (form) => {
  return async (dispatch) => {
    const res = await axiosInstance.post('/product/create', form);
    console.log(res);
  };
};
