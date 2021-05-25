import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateOrder } from '../../actions/actionsIndex';
import Layout from '../../components/Layout/Layout';
import Card from '../../components/UI/Card/Card';
import './Orders.css';

const Orders = () => {
  const order = useSelector((state) => state.order);
  const [type, setType] = useState('');
  const dispatch = useDispatch();
  const onOrderUpdate = (orderId) => {
    const payload = {
      orderId: orderId,
      type: type,
    };
    dispatch(updateOrder(payload));
  };
  return (
    <Layout sidebar>
      {order.orders.map((orderItem, index) => {
        return (
          <Card key={index} headerLeft={orderItem._id}>
            <div
              style={{
                boxSizing: 'border-box',
                padding: '100px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <div className="orderTrack">
                <div className="orderStatus ">
                  <div className="point "></div>
                  <div className="orderInfo">
                    <div className="status">Ordered</div>
                    <div className="date">Fri, 2021</div>
                  </div>
                </div>

                <div className="orderStatus">
                  <div className="point"></div>
                  <div className="orderInfo">
                    <div className="status">Packed</div>
                    <div className="date">Fri, 2021</div>
                  </div>
                </div>

                <div className="orderStatus">
                  <div className="point"></div>
                  <div className="orderInfo">
                    <div className="status">Shipping</div>
                    <div className="date">Fri, 2021</div>
                  </div>
                </div>

                <div className="orderStatus">
                  <div className="point"></div>
                  <div className="orderInfo">
                    <div className="status">Delivered</div>
                    <div className="date">Fri, 2021</div>
                  </div>
                </div>
              </div>
              {/* select input to apply order action */}
              <div
                style={{
                  padding: '0 50px',
                  boxSizing: 'border-box',
                }}
              >
                <select onChange={(e) => setType(e.target.value)}>
                  <option value="">select status</option>
                  {orderItem.orderStatus.map((status, index) => {
                    return (
                      <>
                        {!status.isCompleted ? (
                          <option key={status.type} value={status.type}>
                            {status.type}
                          </option>
                        ) : null}
                      </>
                    );
                  })}
                </select>
              </div>
              {/* button to confirm action */}
              <div
                style={{
                  padding: '0 50px',
                  boxSizing: 'border-box',
                }}
              >
                <button onClick={() => onOrderUpdate(orderItem._id)}>
                  Confirm
                </button>
              </div>
            </div>
          </Card>
        );
      })}
    </Layout>
  );
};

export default Orders;
