import axiosInstance from '../helpers/axios';

export const getProductPage = (payload) => {
  return async (dispatch) => {
    const { cid, type } = payload;
    const res = await axiosInstance.get(`/page/${cid}/${type}`);
    console.log(res);
    if (res.status === 200) {
    } else {
    }
  };
};
