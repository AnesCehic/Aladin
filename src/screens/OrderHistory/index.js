import React, { Component } from 'react'
import OrdersApi from '../../api/OrdersApi'

export default class OrderHistory extends Component {
  constructor() {
    super();
    this.state = {
      order: [],
    }
  }

  componentDidMount() {
    let self = this;
    OrdersApi.getOrders()
      .then(res => {
        self.setState({
          order: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <div>
        <h1>History</h1>

        <div>
          {
            this.state.order.map((e, index) => {
              return <div style={{ border: "1px solid black", padding: "20px" }}>
                <p>Address: {e.address}</p>
                <p>Customer: {e.customer_name}</p>
                <p>Width: {e.width}</p>
                <p>length: {e.length}</p>
                <p>Price: {e.price}</p>
              </div>
            })
          }
        </div>
      </div>
    )
  }
}