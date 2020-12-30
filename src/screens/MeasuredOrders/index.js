import React, { Component } from 'react'
import OrdersApi from '../../api/OrdersApi'

export default class MeasuredOrders extends Component {

  state = {
    orders: [],
  }

  orderDone = (e, id) => {
    console.log(e.target.checked, id)

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
        }, () => console.log(this.state))
      })
      .catch(err => {
        console.log(err)
      })
  }

  packOrder = (id) => {
    OrdersApi.packOrder(id)
      .then(res => {
        alert("Packed")
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
              <p>{e._id.$oid} <button onClick={() => this.packOrder(e._id.$oid)}>Pack order</button></p>

              <ul>
                {
                  e.carpets.map((e2, index2) => {
                    return <li 
                      key={index2}
                    >
                      {e2.name}, {e2.width}, {e2.length}, {e2.price} KM 
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