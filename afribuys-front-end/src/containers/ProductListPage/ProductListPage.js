import React from 'react';

import Layout from '../../components/Layout/Layout';
import ProductStore from './ProductStore/ProductStore';
import getParam from '../../utils/getParams';
import './ProductListPage.css';
import ProductPage from './ProductPage/ProductPage';

const ProductListPage = (props) => {
  const renderProduct = () => {
    const params = getParam(props.location.search);
    let content = null;
    switch (params.type) {
      case 'store':
        content = <ProductStore {...props} />;
        break;
      case 'page':
        content = <ProductPage {...props} />;
        break;
      default:
        content = null;
    }

    return content;
  };
  return (
    <Layout>
      <ProductStore {...props} />
      {renderProduct()}
    </Layout>
  );
};

export default ProductListPage;
