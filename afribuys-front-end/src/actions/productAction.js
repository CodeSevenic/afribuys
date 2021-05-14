import axiosInstance from '../helpers/axios';

export const getProductBySlug = (slug) => {
  return async (dispatch) => {
    const res = await axiosInstance.get(`/products/${slug}`);
    console.log(res);
  };
};
