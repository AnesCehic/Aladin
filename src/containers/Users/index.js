import { Button } from '@material-ui/core';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import instance from '../../axios';

import history from '../../history';

import Pagination from '../../components/Pagination'

import './style.scss'
import { FETCH_USERS } from '../../redux/UsersRedux/types';
import UserShow from '../../components/UserShow';
import UsersApi from '../../api/UsersApi';

class Users extends React.Component {

  constructor() {
    super();

    this.state = {
      isFetching: false,
      users: []
    }
  }

  addAdmin = () => {
    this.props.history.push('/dashboard/addAdmin')
  }

  componentDidMount() {
    UsersApi.getUsers()
      .then(res => {
        console.log(res.data)
        this.setState({
          users: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    // if (this.state.isFetching) {
    //   return <Load
    // }
    return (
      <div className="usersContainer">
        <div className="header">
          <h1>Users</h1>

          <Button
            className="button"
            variant="outlined" 
            color="primary"
            onClick={this.addAdmin}
          >
            Add Admin
          </Button>
        </div>

        <br/>

        {this.state.users.map((e, index) => { return <UserShow key={index} user={e} /> })}

        <Pagination />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    state,
    users: state.users.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Users));