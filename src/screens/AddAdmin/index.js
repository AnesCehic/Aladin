import React, { Component } from 'react'

import { Form, Formik, Field, ErrorMessage } from 'formik';
import CustomErrorMessage from '../../components/ErrorMessage';
import { Row, Container, Button, Col } from 'react-bootstrap';

import TextField from '../../components/TextInput/TextInput';
import AddAdminSchema from '../../utils/validation/AddAdminValidation';

import instance from '../../axios';

class AddAdmin extends Component {

  constructor() {
    super();

    this.state = {
      open: false,
      roles: []
    }
  }

  componentDidMount() {
    instance.get('/api/roles', {
      headers: {
        "Authorization": "Bearer " +  localStorage.getItem("token")
      }
    })
      .then(res => {
        this.setState({
          roles: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return(
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }} >
            <h1 style={{
              padding: "30px",
              textAlign: "center"
            }}>Add user</h1>

            <Formik
              initialValues={{
                username: "",
                password: "",
                role: "",
              }}
              onSubmit={(values, { resetForm }) => {
                instance.post("/api/auth/signup", values, {
                  headers: {
                    "Authorization": "Bearer " + localStorage.getItem("token")
                  }
                })
                  .then(res => {
                    console.log(res);
                  })
                  .catch(err => {
                    console.log(err);
                  })
              }}
              validationSchema={AddAdminSchema}
            >
              <Form style={{ display: "flex", flexDirection: "column", alignSelf: "center" }}>
                <Field name="username" label="Username" component={TextField} />
                <ErrorMessage name="username" label="Username" render={(msg) => <CustomErrorMessage msg={msg} />} />

                <Field placeholder="Password" name="password" type="password" label="Password" component={TextField} />
                <ErrorMessage name="password" label="Password" render={(msg) => <CustomErrorMessage msg={msg} />} />

                <Field as="select" name="role" style={{ padding: "15px", marginBottom: "10px", borderRadius: "3px" }}>
                  <option>--- Select a role ---</option>
                  {
                    this.state.roles.map((e, index) => {
                      return <option key={index} value={e._id.$oid}>{e.name}</option>
                    })
                  }
                </Field>

                <Button type="submit" variant="primary" style={{
                  width: "100px"
                }}>Submit</Button>
              </Form>
            </Formik>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default AddAdmin