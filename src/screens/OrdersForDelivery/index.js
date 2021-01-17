import React, { Component } from 'react'
import OrdersApi from '../../api/OrdersApi'
import UsersApi from '../../api/UsersApi'
import { Button } from 'react-bootstrap'
export default class OrdersForDelivery extends Component {

  state = {
    orders: []
  }

  delivered = (id) => {
    OrdersApi.deliverOrder(id)
      .then(res => {
        console.log("Delivered")
      })
      .catch(err => {
        console.log(err)
      })
  }

  componentDidMount() {
    UsersApi.forDeliveryOrders()
      .then(res => {
        this.setState({
          orders: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <div>
        <h1>Orders for delivery</h1>

        <ul>
          {
            this.state.orders.map((e, index) => {
              return <li key={index}>{e.customer.first_name}, {e.customer.last_name}, {e._id.$oid} <Button onClick={() => this.delivered(e._id.$oid)}>Delivered (Price {e.total_price})</Button></li>
            })
          }
        </ul>
      </div>
    )
  }
}