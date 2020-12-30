import React, { Component } from 'react'
import OrdersApi from '../../api/OrdersApi';

class Index extends Component {

  state = {
    data: [],
  }

  componentDidMount() {
    OrdersApi.allOrders()
      .then(res => {
        console.log(res.data)
        this.setState({
          data: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <div>
        <h1>Index</h1>

        <ul>
          {
            this.state.data.map((e, index) => {
              return <li>{e._id.$oid}, {e.customer.first_name}, {e.customer.last_name}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default Index;