import axiosInstance from '../helpers/axios';
import { cartConstants, userConstants } from './constants';

export const getAddress = () => {
  return async (dispatch) => {
    try {
      const res = await axiosInstance.post(`/user/getaddress`);
      dispatch({ type: userConstants.GET_USER_ADDRESS_REQUEST });
      if (res.status === 200) {
        const {
          userAddress: { address },
        } = res.data;

        dispatch({
          type: userConstants.GET_USER_ADDRESS_SUCCESS,
          payload: { address },
        });
      } else {
        const { error } = res.data;
        dispatch({
          type: userConstants.GET_USER_ADDRESS_FAILURE,
          payload: { error },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const addAddress = (payload) => {
  return async (dispatch) => {
    try {
      const res = await axiosInstance.post(`/user/address/create`, { payload });
      dispatch({ type: userConstants.ADD_USER_ADDRESS_REQUEST });
      if (res.status === 201) {
        console.log(res);
        const {
          address: { address },
        } = res.data;
        dispatch({
          type: userConstants.ADD_USER_ADDRESS_SUCCESS,
          payload: { address },
        });
      } else {
        const { error } = res.data;
        dispatch({
          type: userConstants.ADD_USER_ADDRESS_FAILURE,
          payload: { error },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const addOrder = (payload) => {
  return async (dispatch) => {
    try {
      const res = await axiosInstance.post(`/addOrder`, payload);
      dispatch({ type: userConstants.ADD_USER_ORDER_REQUEST });
      if (res.status === 201) {
        console.log(res);
        dispatch({
          type: cartConstants.RESET_CART,
        });
        // const {
        //   address: { address },
        // } = res.data;
        // dispatch({
        //   type: userConstants.ADD_USER_ORDER_SUCCESS,
        //   payload: { address },
        // });
      } else {
        const { error } = res.data;
        dispatch({
          type: userConstants.ADD_USER_ORDER_FAILURE,
          payload: { error },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getOrders = () => {
  return async (dispatch) => {
    try {
      const res = await axiosInstance.post(`/getOrders`);
      dispatch({ type: userConstants.GET_USER_ORDER_REQUEST });
      if (res.status === 200) {
        console.log(res);
      } else {
        const { error } = res.data;
        dispatch({
          type: userConstants.GET_USER_ORDER_FAILURE,
          payload: { error },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
