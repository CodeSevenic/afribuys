import React from 'react';
import { useSelector } from 'react-redux';
import Layout from '../../components/Layout/Layout';
import Card from '../../components/UI/Card/Card';
import './CartPage.css';

const CartPage = (props) => {
  const cart = useSelector((state) => state.cart);
  const cartItems = cart.cartItems;

  return (
    <Layout>
      <div className="cartContainer">
        <Card headerLeft="My Cart" headerRight={<div>Deliver to</div>}>
          {Object.keys(cartItems).map((key, index) => (
            <div key={index} className="flexRow">
              <div className="cartProductContainer">
                <img src="" alt="Cart Product" />
              </div>
              <div className="cartItemDetails">
                <div>
                  {cartItems[key].name} - qty - {cartItems[key].qty}
                </div>
                <div>Delivery in 3 - 5 days</div>
              </div>
            </div>
          ))}
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
