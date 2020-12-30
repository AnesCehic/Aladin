import { AlternateEmail } from '@material-ui/icons'
import { replace } from 'formik'
import React, { Component } from 'react'
import OrdersApi from '../../api/OrdersApi'

export default class DriverOrders extends Component {

  state = {
    orders: [],
    name: "",
  }

  getData = () => {
    OrdersApi.getOrdersForDriver()
      .then(resp => {
        console.log(resp.data)
        this.setState({
          orders: resp.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  componentDidMount() {
    this.getData();
  }

  addCarptetForOrder = (e, id) => {
    e.preventDefault();
    console.log(id, this.state.name)

    OrdersApi.addCarptetForOrder(id, this.state.name)
      .then(res => {
        console.log("Dodano")
        this.getData();
        this.setState({
          name: "",
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  onChange = (e) => {
    this.setState({
      name: e.target.value,
    })
  }

  confirmReceive = (id) => {
    OrdersApi.confirmReceive(id)
      .then(res => {
        alert("Confirmed")
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <div>
        <h1>Orders for driver</h1>

        <div>
          {
            this.state.orders.map((e, index) => {
              return (
                <div>
                  <p>{e._id.$oid} <button onClick={() => this.confirmReceive(e._id.$oid)}>Confirm receive</button></p>

                  <ul>
                    {
                      e.carpets.map((e, index) => {
                        return <li key={index}>{e.name}</li>
                      })
                    }
                  </ul>

                  <form onSubmit={(a) => this.addCarptetForOrder(a, e._id.$oid)}>
                    <input type="text" name="name" onChange={this.onChange} placeholder="Name" value={this.state.name} />
                    <button type="submit">Submit</button>
                  </form>

                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}