import React, { Component } from 'react';
import AddCustomerForm from '../../containers/AddCustomerForm';

class AddCustomer extends Component {
  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center", marginBottom: "50px" }} >Add Customer</h1>

        <AddCustomerForm />
      </div>
    )
  }
}

export default AddCustomer;