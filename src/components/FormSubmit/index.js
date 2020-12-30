import React, { Component } from 'react';

import Loader from 'react-loader-spinner';
import { Button } from 'react-bootstrap'

export default class FormSubmit extends Component {
  render() {
    return (
      <Button type="submit" variant="primary" style={{
        width: "100px"
      }}>{this.props.logging ? <Loader type="TailSpin" color="white" height={25} width={25} /> : "Sbumit"}</Button>
    )
  }
}