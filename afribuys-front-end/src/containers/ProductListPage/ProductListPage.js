import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProductBySlug } from '../../actions/productAction';
import Layout from '../../components/Layout/Layout';
import './ProductListPage.css';

const ProductListPage = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const { match } = props;
    dispatch(getProductBySlug(match.params.slug));
  }, []);

  return (
    <Layout>
      <div className="card">
        <div className="cardHeader">
          <div>Samsung Mobile Under 10k</div>
          <button>view all</button>
        </div>
        <div>
          <div className="productContainer">
            <div className="productImgContainer">
              <img
                src="http://localhost:2000/public/KKvEMah99-411ixwz8URppESrt_phone-3.png"
                alt="Product"
              />
            </div>
            <div>
              <div className="productInfo">Samsung 4gb phone</div>
              <div>
                <span>4.3</span>
                <span>3353</span>
              </div>
              <div>5000</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductListPage;
