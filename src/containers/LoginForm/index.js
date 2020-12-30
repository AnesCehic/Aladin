import { Formik, Field, ErrorMessage, Form } from 'formik';
import React, { useState } from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap';
import TextField from '../../components/TextInput/TextInput';

import CustomErrorMessage from '../../components/ErrorMessage'
import { Redirect } from 'react-router-dom';

import './style.scss';
import AddAdminSchema from '../../utils/validation/AddAdminValidation';

import Loader from 'react-loader-spinner';

import instance from '../../axios';
import FormSubmit from '../../components/FormSubmit';

const LoginForm = () => {

  const [isLoggedin, setIsLoggedin] = useState(false)
  const [logging, setLogging] = useState(false)

  if(isLoggedin) {
    return (
      <Redirect to="/dashboard" />
    )
  }

  return (
    <Container className="loginForm" fluid="md">
      <img src={ process.env.PUBLIC_URL + "/aladin.jpg"} alt="aladin" />

      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Formik
            initialValues={{
              username: "",
              password: "",
            }}
            onSubmit={(values) => {
              console.log(values);
              setLogging(true)
              instance.post("/api/auth/login", values)
                .then(res => {
                  localStorage.setItem("token", res.data.token);
                  setIsLoggedin(true);
                  setLogging(false);
                })
                .catch(err => {
                  console.log(err);
                  setLogging(false);
                })
            }}
            validationSchema={AddAdminSchema}
          >
            <Form style={{ display: "flex", flexDirection: "column", alignSelf: "center" }}>
              <Field name="username" label="Username" component={TextField} />
              <ErrorMessage name="username" label="username" render={(msg) => <CustomErrorMessage msg={msg} />} />

              <Field name="password" type="password" label="Password" component={TextField} />
              <ErrorMessage name="password" label="Password" render={(msg) => <CustomErrorMessage msg={msg} />} />

              <FormSubmit logging={logging} />
            </Form>
          </Formik>
        </Col>
      </Row>
    </Container>
  )
}

export default LoginForm