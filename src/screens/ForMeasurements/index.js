import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import OrdersApi from '../../api/OrdersApi';
import instance from '../../axios';

export default class ForMeasurements extends Component {

  state = {
    orders: []
  }

  getData = async () => {
    let res = await OrdersApi.receivedOrders()
      
    try {
      for(let i = 0; i < res.data.length; i++) {
        let result = await OrdersApi.carpetsPerOrder(res.data[i]._id.$oid);
        let generateOrderObject = { order: res.data[i], carpets: result.data };
        this.setState({
          orders: [...this.state.orders, generateOrderObject]
        });
      }

      console.log("Orders: ", this.state.orders)
    } catch (error) {
      console.log(error)
    }
  }

  async componentDidMount() {
    this.getData();
  }

  measure = (id) => {
    let self = this;
    OrdersApi.measureOrder(id)
      .then(res => {
        alert("Measured")
        self.getData();
      })
      .catch(err => {
        console.log(err)
      })
  }

  renderCarpets = (arr) => {
    return (
      <ul style={{ listStyleType: "none" }}>
        {
          arr.map((e2, index2) => {
            return <li>Tepih: <Link to={`/dashboard/updateCarptetForOrder/${e2._id.$oid}`} key={index2}>{e2.name}</Link></li>
          })
        }
      </ul>
    )
  }

  render() {
    return (
      <div>
        <h1>For measurements</h1>
        {
          this.state.orders.map((e, index) => {
            return <div>
              <p key={index}>ID narudzbe: <b>{e.order._id.$oid}</b> <Button onClick={() => this.measure(e.order._id.$oid)}>Measure</Button></p>
              {this.renderCarpets(e.carpets)}
            </div>
          })
        }
      </div>
    )
  }
} 