import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAddress } from '../../actions/userActions';
import Layout from '../../components/Layout/Layout';
import { MaterialButton } from '../../components/MaterialUI/MaterialUI';
import AddressForm from './AddressForm';

const CheckoutStep = (props) => {
  return (
    <div className="checkoutStep">
      <div className={`checkoutHeader ${props.active && 'active'}`}>
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
  const dispatch = useDispatch();

  const onAddressSubmit = () => {};

  useEffect(() => {
    dispatch(getAddress());
  }, []);
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
              <div className="loggedInId">
                <span style={{ fontWeight: 500 }}>{auth.user.fullName}</span>
                <span style={{ margin: '0 5px' }}>{auth.user.email}</span>
              </div>
            }
          />

          <CheckoutStep
            stepNumber={'2'}
            title="DELIVERY ADDRESS"
            active={true}
            body={
              <>
                {user.address.map((addr) => (
                  <div className="flexRow addressContainer">
                    <div>
                      <input type="radio" name="address" />
                    </div>
                    <div className="flexRow sb addressinfo">
                      <div>
                        <div>
                          <span>{addr.name}</span>
                          <span>{addr.addressType}</span>
                          <span>{addr.mobileNumber}</span>
                        </div>
                        <div>{addr.address}</div>
                        <MaterialButton
                          title="DELIVERY HERE"
                          style={{
                            width: '250px',
                          }}
                        />
                      </div>
                      <div>Edit</div>
                    </div>
                  </div>
                ))}
              </>
            }
          />
          {/* AddressForm */}
          <AddressForm onSubmitForm={onAddressSubmit} onCancel={() => {}} />

          <CheckoutPage stepNumber={'3'} title={'ORDER SUMMARY'} />

          <CheckoutPage stepNumber={'4'} title={'PAYMENT OPTIONS'} />
        </div>
      </div>
    </Layout>
  );
};

export default CheckoutPage;
