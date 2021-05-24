import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProductBySlug } from '../../../actions/productAction';
import Card from '../../../components/UI/Card/Card';
import { generatePublicUrl } from '../../../urlConfig';
import './ClothingAndAccessories.css';

const ClothingAndAccessories = (props) => {
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    const { match } = props;
    dispatch(getProductBySlug(match.params.slug));
  }, []);
  return (
    <div style={{ padding: '10px' }}>
      <Card
        style={{
          boxSizing: 'border-box',
          padding: '10px',
          display: 'flex',
        }}
      >
        {product.products.map((product) => (
          <div className="caContainer">
            <Link
              className="caImgContainer"
              to={`/${product.slug}/${product._id}/p`}
            >
              <img
                src={generatePublicUrl(product.productPictures[0].img)}
                alt=""
              />
            </Link>
            <div>
              <div className="caProductName">{product.name}</div>
              <div className="caProductPrice">R {product.price}</div>
            </div>
          </div>
        ))}
      </Card>
    </div>
  );
};

export default ClothingAndAccessories;
