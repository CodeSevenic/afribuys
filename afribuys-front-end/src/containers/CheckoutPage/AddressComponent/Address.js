import React from 'react';
import {
  Anchor,
  MaterialButton,
} from '../../../components/MaterialUI/MaterialUI';
import AddressForm from '../AddressForm';

const Address = ({
  addr,
  selectAddress,
  enableAddressEditForm,
  confirmDeliveryAddress,
  onAddressSubmit,
}) => {
  return (
    <div className="flexRow addressContainer">
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
                <span className="addressMobileNumber">{addr.mobileNumber}</span>
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
            initialData={addr}
            onCancel={() => {}}
          />
        )}
      </div>
    </div>
  );
};

export default Address;
