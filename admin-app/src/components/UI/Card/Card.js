import React from 'react';
import './Card.css';

/**
 * @author
 * @function Card
 **/

const Card = (props) => {
  const { headerLeft, headerRight, ...rest } = props;
  return (
    <div className="card" {...rest}>
      {(headerLeft || headerRight) && (
        <div className="cardHeader">
          {headerLeft && <div>{headerLeft}</div>}
          {headerRight && headerRight}
        </div>
      )}

      {props.children}
    </div>
  );
};

export default Card;
