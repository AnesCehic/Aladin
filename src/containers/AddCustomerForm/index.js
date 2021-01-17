import React, { Component } from 'react';

import {
  Container,
  Row,
  Col,
  Button
} from 'react-bootstrap';

import { Formik, Field, Form } from 'formik';
import AddCustomerSchema from '../../utils/validation/AddCustomerValidation';

import TextField from '../../components/TextInput/TextInput'
import FormSubmit from '../../components/FormSubmit';
import TextInput from '../../components/TextInput/TextInput';
import instance from '../../axios';

class AddCustomerForm extends Component {

  constructor() {
    super();

    this.state = {
      logging: false,
      formFields: {
        first_name: "First name",
        last_name: "Last name",
        street: "Street",
        street_number: "Street number",
        interphone: "Interphone",
        telephone_number: "Telephone",
        optional_telephone_number: "Optional telephone",
        note: "Note",
      }
    }
  }

  render() {
    return (
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Formik
              initialValues={{
                first_name: "",
                last_name: "",
                street: "",
                street_number: "",
                interphone: "",
                telephone_number: "",
                optional_telephone_number: "",
                note: "",
              }}
              onSubmit={(values) => {
                instance.post("/api/customers", values, {
                  headers: {
                    "Authorization": "Bearer " + localStorage.getItem("token")
                  }
                }).then(res => {
                  console.log("insertovan")
                }).catch(err => {
                  console.log(err);
                })
              }}
            >
              <Form style={{ display: "flex", flexDirection: "column", alignSelf: "center" }}>
                {
                  Object.keys(this.state.formFields).map((e, index) => {
                    return <Field key={index} name={e} label={this.state.formFields[e]} type="text" component={TextField} autoComplete="off" />
                  })
                }

                {/* TODO refactor this */}
                <FormSubmit logging={this.state.logging} />
              </Form>
            </Formik>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default AddCustomerForm;