import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProductBySlug } from '../../actions/productAction';
import Layout from '../../components/Layout/Layout';

const ProductListPage = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const { match } = props;
    dispatch(getProductBySlug(match.params.slug));
  }, []);

  return <Layout>ProductListPage</Layout>;
};

export default ProductListPage;
