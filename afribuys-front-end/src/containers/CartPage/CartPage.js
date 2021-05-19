import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../actions/actionsIndex';
import Layout from '../../components/Layout/Layout';
import Card from '../../components/UI/Card/Card';
import CartItem from './CartItem/CartItem';
import './CartPage.css';

const CartPage = (props) => {
  const cart = useSelector((state) => state.cart);
  // const cartItems = cart.cartItems;
  const [cartItems, setCartItems] = useState(cart.cartItems);

  const dispatch = useDispatch();

  useEffect(() => {
    setCartItems(cart.cartItems);
  }, [cart.cartItems]);

  const onQuantityIncrement = (_id, qty) => {
    // console.log({ _id, qty });
    const { name, price, img } = cartItems[_id];
    dispatch(addToCart({ _id, name, price, img }, 1));
  };

  const onQuantityDecrement = (_id, qty) => {
    console.log({ _id, qty });
    const { name, price, img } = cartItems[_id];
    dispatch(addToCart({ _id, name, price, img }, -1));
  };

  return (
    <Layout>
      <div className="cartContainer">
        <Card headerLeft="My Cart" headerRight={<div>Deliver to</div>}>
          {Object.keys(cartItems).map((key, index) => (
            <CartItem
              key={index}
              cartItem={cartItems[key]}
              onQuantityDec={onQuantityDecrement}
              onQuantityInc={onQuantityIncrement}
            />
          ))}
        </Card>
        <Card
          headerLeft="Price"
          style={{
            width: '500px',
          }}
        ></Card>
      </div>
    </Layout>
  );
};

export default CartPage;
