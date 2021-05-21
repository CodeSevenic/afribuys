import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAddress } from '../../actions/userActions';
import Layout from '../../components/Layout/Layout';
import {
  Anchor,
  MaterialButton,
  MaterialInput,
} from '../../components/MaterialUI/MaterialUI';
import AddressForm from './AddressForm';
import PriceDetails from '../../components/PriceDetails/PriceDetails';
import './CheckoutPage.css';

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
  const cart = useSelector((state) => state.cart);
  const auth = useSelector((state) => state.auth);
  const [newAddress, setNewAddress] = useState(false);
  const [address, setAddress] = useState([]);
  const [confirmAddress, setConfirmAddress] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const dispatch = useDispatch();

  const onAddressSubmit = (addr) => {
    setSelectedAddress(addr);
    setConfirmAddress(true);
  };

  const selectAddress = (addr) => {
    // console.log(addr);
    const updatedAddress = address.map((adr) =>
      adr._id === addr._id ? { ...adr, selected: true } : { ...adr, selected: false }
    );
    setAddress(updatedAddress);
  };

  const confirmDeliveryAddress = (addr) => {
    setSelectedAddress(addr);
    setConfirmAddress(true);
  };

  const enableAddressEditForm = (addr) => {
    const updatedAddress = address.map((adr) =>
      adr._id === addr._id ? { ...adr, edit: true } : { ...adr, edit: false }
    );
    setAddress(updatedAddress);
  };

  useEffect(() => {
    auth.authenticate && dispatch(getAddress());
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
                  <div>{`${selectAddress.address} - ${selectedAddress.pinCode}`}</div>
                ) : (
                  address.map((addr, index) => (
                    <div key={index} className="flexRow addressContainer">
                      <div>
                        <input
                          name="address"
                          onClick={() => selectAddress(addr)}
                          type="radio"
                        />
                      </div>
                      <div className="flexRow sb addressinfo">
                        {!addr.edit ? (
                          <div style={{ width: '100%' }}>
                            <div className="addressDetail">
                              <div>
                                <span className="addressName">{addr.name}</span>
                                <span className="addressType">{addr.addressType}</span>
                                <span className="addressMobileNumber">
                                  {addr.mobileNumber}
                                </span>
                              </div>
                              {addr.selected && (
                                <Anchor
                                  name="EDIT"
                                  onClick={() => enableAddressEditForm(addr)}
                                  style={{
                                    fontWeight: '500',
                                    color: '#2874f0',
                                  }}
                                />
                              )}
                            </div>
                            <div className="fullAddress">
                              {addr.address} <br /> {`${addr.state} - ${addr.pinCode}`}
                            </div>
                            {addr.selected && (
                              <MaterialButton
                                title="DELIVERY HERE"
                                onClick={() => confirmDeliveryAddress(addr)}
                                style={{
                                  width: '250px',
                                  margin: '10px 0',
                                }}
                              />
                            )}
                          </div>
                        ) : (
                          <AddressForm
                            withoutLayout={true}
                            onSubmitForm={onAddressSubmit}
                            onCancel={() => {}}
                          />
                        )}
                      </div>
                    </div>
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

          <CheckoutStep stepNumber={'3'} title={'ORDER SUMMARY'} />

          <CheckoutStep stepNumber={'4'} title={'PAYMENT OPTIONS'} />
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
