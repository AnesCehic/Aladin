import React from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import Dashborad from './screens/Dashboard';
import Login from './screens/Login'

import 'bootstrap/dist/css/bootstrap.min.css';
import ProtectedRoute from './containers/ProtectedRoute';

import history from './history'

function App() {
  return (
    <div>
      <Router history={history}>
        <Route exact path="/" component={Login} />
        <ProtectedRoute path="/dashboard">
          <Dashborad />
        </ProtectedRoute>
      </Router>
    </div>
  );
}

export default App;
