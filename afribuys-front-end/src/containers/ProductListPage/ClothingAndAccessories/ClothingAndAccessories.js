import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductBySlug } from '../../../actions/productAction';
import Card from '../../../components/UI/Card/Card';
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
      ></Card>
    </div>
  );
};

export default ClothingAndAccessories;
