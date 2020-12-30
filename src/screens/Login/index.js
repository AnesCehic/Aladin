import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { reset } from 'redux-form';

import LoginForm from '../../containers/LoginForm';
import history from '../../history';
import { checkLoggedUser } from '../../utils/AuthUtil';

class Login extends Component {

  render() {
    if(checkLoggedUser()) {
      return <Redirect to="/dashboard" />
    }
    return (
      <LoginForm />
    )
  }
}

export default Login;