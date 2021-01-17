import { Button, TextField } from '@material-ui/core';
import React, { Component } from 'react'
import { Container } from 'react-bootstrap';

import { Field, reduxForm } from 'redux-form';
import CarpetApi from '../../api/CarpetApi';

class AddCarpetType extends Component {

  state = {
    name: "",
    price_per_surface: 0,
  }

  onSubmit = (e) => {
    e.preventDefault();
    CarpetApi.addCarpetTypes(this.state)
      .then(_ => {
        console.log("added")
      })
      .catch(err => {
        console.log(err)
      })
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <Container>
        <h1 style={{ textAlign: "center", marginBottom: "50px", marginTop: "50px" }}>Dodavanje tipa tepiha</h1>
        <form onSubmit={this.onSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >

          <TextField style={{ width: "500px", margin: "10px 20px" }} type="text" variant="outlined" id="outlined-basic" label="Tip tepiha" name="name" onChange={this.onChange} />
          <TextField style={{ width: "500px", margin: "10px 20px" }} type="number" variant="outlined" id="outlined-basic" label="Cijena po metru" name="price_per_surface" onChange={this.onChange} />

          <Button type="submit" variant="contained" color="primary">
            Dodaj tip tepiha
          </Button>
        </form>
      </Container>
    )
  }
}

export default AddCarpetType;