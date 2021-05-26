import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductBySlug } from '../../../actions/actionsIndex';
import { generatePublicUrl } from '../../../urlConfig';
import './ProductStore.css';
import { Link } from 'react-router-dom';
import Card from '../../../components/UI/Card/Card';

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
            headerRight={<button>view all</button>}
          >
            <div className="productContent">
              {product.productsByPrice[key].map((product) => (
                <Link
                  to={`/${product.slug}/${product._id}/p`}
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
                    <div className="productTitle">{product.name}</div>
                    <div>
                      <span>4.3</span>&nbsp;
                      <span>3353</span>
                    </div>
                    <div className="productPrice">{product.price}</div>
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
