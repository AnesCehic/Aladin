import React, { Component } from 'react'
import AddOrderForm from '../../containers/AddOrderForm.js'

export default class AddOrder extends Component {
  render() {
    return (
      <div>
        <h1>Add order</h1>

        <AddOrderForm />
      </div>
    )
  }
}