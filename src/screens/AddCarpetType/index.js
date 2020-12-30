import React, { Component } from 'react'
import { Container } from 'react-bootstrap';

import { Field, reduxForm } from 'redux-form';
import CarpetApi from '../../api/CarpetApi';

class AddCarpetType extends Component {
  render() {
    return (
      <Container>
        <form onSubmit={this.props.handleSubmit}>
          <Field name="name" component="input" type="text" />
          <Field name="price_per_surface" component="input" type="number" />

          <button type="submit">Add carpet type</button>
        </form>
      </Container>
    )
  }
}

export default reduxForm({
  form: "addCarpetType",
  onSubmit: (values) => {
    CarpetApi.addCarpetTypes(values)
      .then(_ => {
        console.log("added")
      })
      .catch(err => {
        console.log(err)
      })
  }
})(AddCarpetType);