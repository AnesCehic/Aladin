import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form';
import AddOrderReduxForm from './AddOrderReduxForm';

class AddOrderForm extends Component {
  
  submit = (values) => {
    values.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>Test</h1>

        <AddOrderReduxForm />
      </div>
    )
  }
}

export default AddOrderForm;