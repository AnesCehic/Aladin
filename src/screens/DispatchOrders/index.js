import React, { Component, useState, useEffect } from 'react'
import OrdersContainer from '../../containers/DispatchOrdersContainer/OrdersContainer';
import instance from '../../axios';

const DispatchOrders = () => {

  const [orders, setOrders] = useState([]);

  const fetchOrdersToDispatch = () => {
    instance.get("/api/accepted_orders", {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("token"),
      }
    }).then(res => {
      setOrders(res.data)
    }).catch(err => {
      console.log(err)
    })
  }

  useEffect(() => {
    fetchOrdersToDispatch();
  }, [])

  return (
    <div>
      <OrdersContainer orders={orders} />
    </div>
  )
}

export default DispatchOrders;