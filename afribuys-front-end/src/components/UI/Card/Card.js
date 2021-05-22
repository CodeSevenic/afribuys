import React from 'react';
import './Card.css';

const Card = (props) => {
  const { headerLeft, headerRight, ...rest } = props;
  return (
    <div className="card" {...rest}>
      {props.headerLeft ||
        (props.headerRight && (
          <div className="cardHeader">
            {headerLeft && <div>{headerLeft}</div>}
            {headerRight && <div>{headerRight}</div>}
          </div>
        ))}

      {props.children}
    </div>
  );
};

export default Card;
