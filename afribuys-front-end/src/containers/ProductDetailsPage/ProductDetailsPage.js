import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../../components/Layout/Layout';
import { getProductDetailsById } from '../../actions/actionsIndex';

const ProductDetailsPage = (props) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);

  useEffect(() => {
    const { productId } = props.match.params;
    const payload = {
      params: {
        productId,
      },
    };
    console.log(props);
    dispatch(getProductDetailsById(payload));
  }, []);

  return (
    <Layout>
      <div>{product.productDetails.name}</div>
    </Layout>
  );
};

export default ProductDetailsPage;
