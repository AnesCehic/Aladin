import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import AddAdmin from '../../screens/AddAdmin';
import Orders from '../../screens/Orders';
import OrderDetails from '../OrderDetails'
import Users from '../Users';
import Index from '../../screens/Index'
import AddCustomer from '../../screens/AddCustomer';
import CarpetStatuses from '../../screens/Carpets/CarpetStatuses';
import CarpetTypes from '../../screens/Carpets/CarpetTypes';
import AddOrder from '../../screens/AddOrder';
import AddCarpetType from '../../screens/AddCarpetType';

import OrderHistory from '../../screens/OrderHistory/index';
import EditUser from '../../screens/EditUser.js';
import DispatchOrders from '../../screens/DispatchOrders';
import DriverOrders from '../../screens/DriverOrders';
import ForMeasurements from '../../screens/ForMeasurements';
import updateCarptetForOrder from '../../screens/UpdateCarpetForOrder';
import MeasuredOrders from '../../screens/MeasuredOrders';
import PackedOrders from '../../screens/PackedOrders';
import OrdersForDelivery from '../../screens/OrdersForDelivery';

const DashboardRouter = (props) => {
  return (
    <div>
      <Route path={`${props.path}`} exact component={Index} />
      <Route exact path={`${props.path}/orders`} component={Orders} />
      <Route path={`${props.path}/addAdmin`} component={AddAdmin} />
      <Route path={`${props.path}/editOrder/:id`} component={() => <h1>Edit</h1>} />
      <Route path={`${props.path}/orderDetails/:id`} component={OrderDetails} />
      <Route path={`${props.path}/addCustomer`} component={AddCustomer} />
      <Route path={`${props.path}/carpetStatuses`} component={CarpetStatuses} />
      <Route path={`${props.path}/carpetTypes`} component={CarpetTypes} />
      <Route path={`${props.path}/addOrder`} component={AddOrder} />
      <Route path={`${props.path}/addCarpetType`} component={AddCarpetType} />
      <Route path={`${props.path}/history`} component={OrderHistory} />
      <Route path={`${props.path}/editUser/:id`} component={EditUser} />
      <Route path={`${props.path}/dispatchOrders`} component={DispatchOrders} />
      <Route path={`${props.path}/listDriverOrders`} component={DriverOrders} />
      <Route path={`${props.path}/forMeasurments`} component={ForMeasurements} />
      <Route path={`${props.path}/updateCarptetForOrder/:id`} component={updateCarptetForOrder} />
      <Route path={`${props.path}/measured`} component={MeasuredOrders} />
      <Route path={`${props.path}/packed`} component={PackedOrders} />
      <Route path={`${props.path}/forDrivers`} component={OrdersForDelivery} />
    </div>
  )
}

export default DashboardRouter;