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
        <h1 style={{ textAlign: "center", margin: "50px" }}>Index</h1>

        <div className="history">
          {
            this.state.data.map((e, index) => {
              return <div key={index}><div>{e._id.$oid}</div> <div>Ime: {e.customer.first_name}, Prezime: {e.customer.last_name}</div><div>Ulica: {e.customer.street} br. {e.customer.street_number}</div><div>Telefon: {e.customer.telephone_number}</div><div>Status: <b>{e.order_status.value}</b></div></div>
            })
          }
        </div>
      </div>
    )
  }
}

export default Index;