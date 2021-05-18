import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductPage } from '../../../actions/actionsIndex';
import getParams from '../../../utils/getParams';
import './ProductPage.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const ProductPage = (props) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const { page } = product;

  useEffect(() => {
    const params = getParams(props.location.search);
    const payload = {
      params,
    };

    dispatch(getProductPage(payload));
  }, []);

  return (
    <div className="page-content">
      <h3>{page.title}</h3>
      <Carousel renderThumbs={() => {}}>
        {page.banners &&
          page.banners.map((banner, index) => (
            <a
              key={index}
              style={{ display: 'block' }}
              href={banner.navigateTo}
            >
              <img src={banner.img} alt="Banner" />
            </a>
          ))}
      </Carousel>
      <div>
        {page.products &&
          page.products.map((product, index) => (
            <div key={index}>
              <img src={product.img} alt="Product" />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductPage;
