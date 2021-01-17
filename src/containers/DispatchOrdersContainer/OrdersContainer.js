import React, { Component } from 'react'
import CarpetApi from '../../api/CarpetApi'
import OrdersApi from '../../api/OrdersApi'
import UsersApi from '../../api/UsersApi'

import "./style.scss"

export default class OrdersContainer extends Component {

  state = {
    data: [],
    statuses: [],
    drivers: [],
  }

  componentDidMount() {
    OrdersApi.getOrderStatuses()
      .then(resp => {
        console.log(resp.data)
        // console.log(resp.data.find(el => el._id.$oid === "5fcd127ea7a245f5bba9b7a3").value)
      })
      .catch(err => {
        console.log(err)
      })

    UsersApi.getUsers()
      .then(resp => {
        this.setState({
          statuses: resp.data
        })
      })
      .catch(err => {
        console.log(err)
      })

    UsersApi.getDrivers()
      .then(resp => {
       this.setState({
         drivers: resp.data
       })
      })
      .catch(err => {
        console.log(err)
      })
  }

  selectDriver = (e, data) => {
    UsersApi.updateOrderDriver(data._id.$oid, e.target.value)
      .then(_ => {
        console.log("Updated");
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <div>
        <h1>Orders ready to dispatch</h1>

        <table>
        <thead>
          <tr>
            <th>ID narudzbe</th>
            <th>Created at</th>
            <th>Order status</th>
            <th>Name</th>
            <th>Driver</th>
            <th>Telephone</th>
          </tr>
          </thead>
          <tbody>
          {
            this.props.orders.map((e, index) => {
              return (
                <tr key={index}>
                  <td>{e._id.$oid}</td>
                  <td>{e.created_at.$date}</td>
                  <td>{e.order_status.value}</td>
                  <td>{e.customer.first_name + " " + e.customer.last_name}</td>
                  <td>
                    <select onChange={(a) => this.selectDriver(a, e)}>
                      <option value="">SELECT DRIVER</option>
                      {
                        this.state.drivers.map((e2, index2) => {
                          return <option key={index2} value={e2._id.$oid}>{e2.username}</option>
                        })
                      }
                    </select>
                  </td>
                  <td>{e.customer.telephone_number}</td>
                </tr>
              )
            })
          }
          </tbody>
        </table>

      </div>
    )
  }
}