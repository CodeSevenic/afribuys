import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAddress, getCartItems } from '../../actions/actionsIndex';
import Layout from '../../components/Layout/Layout';
import {
  MaterialButton,
  MaterialInput,
} from '../../components/MaterialUI/MaterialUI';
import AddressForm from './AddressForm';
import PriceDetails from '../../components/PriceDetails/PriceDetails';
import './CheckoutPage.css';
import Address from './AddressComponent/Address';
import CartPage from '../CartPage/CartPage';
import Card from '../../components/UI/Card/Card';

const CheckoutStep = (props) => {
  return (
    <div className="checkoutStep">
      <div
        onClick={props.onClick}
        className={`checkoutHeader ${props.active && 'active'}`}
      >
        <div>
          <span className="stepNumber">{props.stepNumber}</span>
          <span className="stepTitle">{props.title}</span>
        </div>
      </div>
      {props.body && props.body}
    </div>
  );
};

const CheckoutPage = (props) => {
  const user = useSelector((state) => state.user);
  const auth = useSelector((state) => state.auth);
  const [newAddress, setNewAddress] = useState(false);
  const [address, setAddress] = useState([]);
  const [confirmAddress, setConfirmAddress] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [orderSummary, setOrderSummary] = useState(false);
  const [orderConfirmation, setOrderConfirmation] = useState(false);
  const [paymentOption, setPaymentOption] = useState(false);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const onAddressSubmit = (addr) => {
    setSelectedAddress(addr);
    setConfirmAddress(true);
    setOrderSummary(true);
  };

  const selectAddress = (addr) => {
    // console.log(addr);
    const updatedAddress = address.map((adr) =>
      adr._id === addr._id
        ? { ...adr, selected: true }
        : { ...adr, selected: false }
    );
    setAddress(updatedAddress);
  };

  const confirmDeliveryAddress = (addr) => {
    setSelectedAddress(addr);
    setConfirmAddress(true);
    setOrderSummary(true);
  };

  const enableAddressEditForm = (addr) => {
    const updatedAddress = address.map((adr) =>
      adr._id === addr._id ? { ...adr, edit: true } : { ...adr, edit: false }
    );
    setAddress(updatedAddress);
  };

  const userOrderConfirmation = () => {
    setOrderConfirmation(true);
    setOrderSummary(false);
    setPaymentOption(true);
  };

  useEffect(() => {
    auth.authenticate && dispatch(getAddress());
    auth.authenticate && dispatch(getCartItems());
  }, [auth.authenticate]);

  useEffect(() => {
    const address = user.address.map((addr) => ({
      ...addr,
      selected: false,
      edit: false,
    }));
    setAddress(address);
  }, [user.address]);

  return (
    <Layout>
      <div className="cartContainer" style={{ alignItems: 'flex-start' }}>
        <div className="checkoutContainer">
          {/* check if user is logged in or out */}
          <CheckoutStep
            stepNumber={'1'}
            title="LOGIN"
            active={!auth.authenticate}
            body={
              auth.authenticate ? (
                <div className="loggedInId">
                  <span style={{ fontWeight: 500 }}>{auth.user.fullName}</span>
                  <span style={{ margin: '0 5px' }}>{auth.user.email}</span>
                </div>
              ) : (
                <div>
                  <MaterialInput label="Email" />
                </div>
              )
            }
          />

          <CheckoutStep
            stepNumber={'2'}
            title="DELIVERY ADDRESS"
            active={!confirmAddress && auth.authenticate}
            body={
              <>
                {confirmAddress ? (
                  <div>{`${selectedAddress.address} - ${selectedAddress.pinCode}`}</div>
                ) : (
                  address.map((addr, index) => (
                    <Address
                      key={index}
                      selectAddress={selectAddress}
                      enableAddressEditForm={enableAddressEditForm}
                      confirmDeliveryAddress={confirmDeliveryAddress}
                      onAddressSubmit={onAddressSubmit}
                      addr={addr}
                    />
                  ))
                )}
              </>
            }
          />

          {/* AddressForm */}
          {selectedAddress ? null : newAddress ? (
            <AddressForm onSubmitForm={onAddressSubmit} onCancel={() => {}} />
          ) : (
            <CheckoutStep
              stepNumber="+"
              title="ADD NEW ADDRESS"
              active={false}
              onClick={() => setNewAddress(true)}
            />
          )}

          <CheckoutStep
            stepNumber={'3'}
            title={'ORDER SUMMARY'}
            active={orderSummary}
            body={
              orderSummary ? (
                <CartPage onlyCartItems={true} />
              ) : orderConfirmation ? (
                <div>{Object.keys(cart.cartItems).length} Items</div>
              ) : null
            }
          />

          {orderSummary && (
            <Card style={{ margin: '10px 0' }}>
              <div
                className="flexRow sb"
                style={{ padding: '20px', alignItems: 'center' }}
              >
                <p>
                  Order Summary email will be sent to{' '}
                  <strong>{auth.user.email}</strong>
                </p>
                <MaterialButton
                  title="CONTINUE"
                  onClick={userOrderConfirmation}
                  style={{ width: '200px' }}
                />
              </div>
            </Card>
          )}

          <CheckoutStep
            stepNumber={'4'}
            title={'PAYMENT OPTIONS'}
            active={paymentOption}
            body={
              paymentOption && (
                <div className="flexRow">
                  <input type="radio" name="paymentOption" value="cod" />
                  <div>Cash on delivery</div>
                </div>
              )
            }
          />
        </div>
        {/* Price Component */}
        <PriceDetails
          totalItem={Object.keys(cart.cartItems).reduce(function (qty, key) {
            return qty + cart.cartItems[key].qty;
          }, 0)}
          totalPrice={Object.keys(cart.cartItems).reduce((totalPrice, key) => {
            const { price, qty } = cart.cartItems[key];
            return totalPrice + price * qty;
          }, 0)}
        />
      </div>
    </Layout>
  );
};

export default CheckoutPage;
