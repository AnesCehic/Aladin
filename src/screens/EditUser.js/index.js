import { Colorize } from '@material-ui/icons'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import React, { Component } from 'react'
import instance from '../../axios';
import TextInput from '../../components/TextInput/TextInput'
import AddAdminSchema from '../../utils/validation/AddAdminValidation';
import CustomErrorMessage from '../../components/ErrorMessage/index';

export default class EditUser extends Component {

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

  // TODO need axios post
  render() {
    return (
      <div>
        <h1>Edit user</h1>

        <Formik
          initialValues={{
            username: "",
            password: "",
            role: "",
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
          validationSchema={AddAdminSchema}
        >
          <Form style={{ display: "flex", flexDirection: "column" }}>
            <Field name="username" label="Username" component={TextInput} />
            <ErrorMessage name="username" label="Username" render={(msg) => <CustomErrorMessage msg={msg} />} />

            <Field name="password" label="Password" component={TextInput} type="password" />
            <ErrorMessage name="password" label="Password" render={(msg) => <CustomErrorMessage msg={msg} />} />

            <Field as="select">
              <option>--- Select role ---</option>
              {
                this.state.roles.map((e, index) => {
                  return <option key={index} value={e._id.$oid}>{e.name}</option>
                })
              }
            </Field>
          </Form>
        </Formik>
      </div>
    )
  }
}