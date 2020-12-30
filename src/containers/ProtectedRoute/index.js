import React, { Component } from 'react'
import { Redirect, Route } from 'react-router-dom';

import { checkLoggedUser } from '../../utils/AuthUtil';

class ProtectedRoute extends Component {

  render() {
    return (
      <Route
        path={this.props.path}
        render={({ location }) => 
          checkLoggedUser() ? (
            this.props.children
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: location }
              }}
            />
          )
        }
      />
    )
  }
}

export default ProtectedRoute;