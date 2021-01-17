import React, { Component } from 'react'
import OrdersApi from '../../api/OrdersApi'

import CarpetApi from '../../api/CarpetApi'
import UsersApi from '../../api/UsersApi'

import { Modal, Button } from 'react-bootstrap'

import "./style.scss"

export default class PackedOrders extends Component {

  state = {
    data: [],
    statuses: [],
    drivers: [],
    showModal: true
  }

  componentDidMount() {
    OrdersApi.doneOrders()
      .then(res => {
        this.setState({
          data: res.data
        })
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
    OrdersApi.updateOrderDeliverer(data._id.$oid, e.target.value)
      .then(_ => {
        console.log("Updated");
      })
      .catch(err => {
        console.log(err)
      })
  }

  show = () => {
    this.setState({
      showModal: !this.state.showModal
    })
  }

  handleClose = () => {
    this.setState({
      showModal: !this.state.showModal
    })
  }

  render() {
    return (
      <div>
        <h1>Orders ready to dispatch</h1>

        <table>
        <thead>
          <tr>
            <th>Created at</th>
            <th>Order status</th>
            <th>Name</th>
            <th>Address</th>
            <th>Telephone</th>
          </tr>
          </thead>
          <tbody>
          {
            this.state.data.map((e, index) => {
              return (
                <tr key={index}>
                  <td>{e.created_at.$date}</td>
                  <td>{e.order_status.value}</td>
                  <td>{e.customer.first_name + " " + e.customer.last_name}</td>
                  <td>
                    <select value={e.delivered_by && e.delivered_by.$oid} onChange={(a) => this.selectDriver(a, e)}>
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