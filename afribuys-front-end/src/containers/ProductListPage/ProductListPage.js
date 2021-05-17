import React from 'react';

import Layout from '../../components/Layout/Layout';
import ProductStore from './ProductStore/ProductStore';
import './ProductListPage.css';

const ProductListPage = (props) => {
  const renderProduct = () => {
    console.log(props);
  };
  return (
    <Layout>
      <ProductStore {...props} />
      {renderProduct()}
    </Layout>
  );
};

export default ProductListPage;
