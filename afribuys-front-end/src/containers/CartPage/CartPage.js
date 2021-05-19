import React from 'react';
import Layout from '../../components/Layout/Layout';
import Card from '../../components/UI/Card/Card';
import './CartPage.css';

const CartPage = (props) => {
  return (
    <Layout>
      <div className="cartContainer">
        <Card>
          <div className="cardHeader">
            <div>My Cart</div>
            <div>Deliver to</div>
          </div>
          <div className="flexRow">
            <div className="cartProductContainer">
              <img src="" alt="Cart Product" />
            </div>
            <div className="cartItemDetails">
              product Name
              <div>Delivery in 3 - 5 days</div>
            </div>
          </div>
        </Card>
        <Card
          style={{
            width: '500px',
          }}
        >
          Price
        </Card>
      </div>
    </Layout>
  );
};

export default CartPage;
