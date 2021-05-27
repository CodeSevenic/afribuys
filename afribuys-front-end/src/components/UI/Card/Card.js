import React from 'react';
import './Card.css';

const Card = (props) => {
  const { headerLeft, headerRight, ...rest } = props;
  return (
    <div className="card" {...rest}>
      {(headerLeft || headerRight) && (
        <div className="cardHeader">
          {headerLeft && (
            <div
              style={{
                alignSelf: 'center',
                fontSize: '20px',
                fontWeight: '500',
              }}
            >
              {headerLeft}
            </div>
          )}
          {headerRight && <div>{headerRight}</div>}
        </div>
      )}

      {props.children}
    </div>
  );
};

export default Card;
