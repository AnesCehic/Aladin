import React, { Component } from 'react'
import OrdersApi from '../../api/OrdersApi'

import { Button } from 'react-bootstrap'

export default class MeasuredOrders extends Component {

  state = {
    orders: [],
  }

  orderDone = (e, id) => {

    OrdersApi.checkOrderAsDone(id, e.target.checked)
      .then(_ => {
        alert("Done")
        this.getData();
      })
      .catch(err => {
        console.log(err)
      })
  }

  getData = () => {
    OrdersApi.measuredOrders()
      .then(res => {
        this.setState({
          orders: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  packOrder = (id) => {
    OrdersApi.packOrder(id)
      .then(res => {
        alert("Packed")
        this.getData();
      })
      .catch(err => {
        console.log(err)
      })
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div>
        <h1>Measured orders</h1>

        {
          this.state.orders.map((e, index) => {
            return <div key={index}>
              <p>ID narudžbe: <b>{e._id.$oid}</b> <Button onClick={() => this.packOrder(e._id.$oid)}>Pack order</Button></p>

              <ul>
                {
                  e.carpets.map((e2, index2) => {
                    return <li 
                      key={index2}
                    >
                      Ime: {e2.name}, Dužina: {e2.width}, Širina: {e2.length}, Cijena: {e2.price} KM, Spakovan: 
                      <input 
                        type="checkbox"
                        name="isPacked"
                        checked={e2.is_packed}
                        onChange={(ev) => this.orderDone(ev, e2._id.$oid)} />
                    </li>
                  })
                }
              </ul>
            </div>
          })
        }
      </div>
    )
  }
}