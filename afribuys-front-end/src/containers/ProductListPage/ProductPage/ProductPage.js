import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductPage } from '../../../actions/actionsIndex';
import getParams from '../../../utils/getParams';

const ProductPage = (props) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  useEffect(() => {
    const params = getParams(props.location.search);
    const payload = {
      params,
    };

    dispatch(getProductPage(payload));
  });
  return <></>;
};

export default ProductPage;
