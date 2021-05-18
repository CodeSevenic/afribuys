import React from 'react';
import './Card.css';

const Card = (props) => {
  return (
    <div className="product-card" {...props}>
      {props.children}
    </div>
  );
};

export default Card;
