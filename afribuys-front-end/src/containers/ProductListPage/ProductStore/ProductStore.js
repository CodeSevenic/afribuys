import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductBySlug } from '../../../actions/actionsIndex';
import { generatePublicUrl } from '../../../urlConfig';
import './ProductStore.css';
import { Link } from 'react-router-dom';
import Card from '../../../components/UI/Card/Card';
import { MaterialButton } from '../../../components/MaterialUI/MaterialUI';
import Rating from '../../../components/UI/Rating';
import Price from '../../../components/UI/Price';

const ProductStore = (props) => {
  const product = useSelector((state) => state.product);
  const priceRange = product.priceRange;
  const dispatch = useDispatch();

  useEffect(() => {
    const { match } = props;
    dispatch(getProductBySlug(match.params.slug));
  }, []);

  return (
    <>
      {Object.keys(product.productsByPrice).map((key, index) => {
        return (
          <Card
            key={index}
            headerLeft={`${props.match.params.slug} Mobile Under R${priceRange[key]}k`}
            headerRight={
              <MaterialButton
                title={'VIEW ALL'}
                style={{
                  width: '96px',
                }}
                bgColor="#2874f0"
                fontSize="12px"
              />
            }
            style={{
              with: 'calc(100% - 40px)',
              margin: '20px',
            }}
          >
            <div style={{ display: 'flex' }}>
              {product.productsByPrice[key].map((product) => (
                <Link
                  to={`/${product.slug}/${product._id}/p`}
                  style={{
                    display: 'block',
                    textDecoration: 'none',
                    color: '#000',
                  }}
                  className="productContainer"
                  key={product._id}
                >
                  <div className="productImgContainer">
                    <img
                      src={generatePublicUrl(product.productPictures[0].img)}
                      alt="Product"
                    />
                  </div>
                  <div className="productInfo">
                    <div style={{ margin: '10px 0' }}>{product.name}</div>
                    <div>
                      <Rating value="4.3" />
                      &nbsp;&nbsp;
                      <span
                        style={{
                          color: '#777',
                          fontWeight: '500',
                          fontSize: '12px',
                        }}
                      >
                        (3353)
                      </span>
                    </div>
                    <Price value={product.price} />
                  </div>
                </Link>
              ))}
            </div>
          </Card>
        );
      })}
    </>
  );
};

export default ProductStore;
