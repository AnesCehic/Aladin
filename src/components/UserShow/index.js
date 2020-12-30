import React, { Component } from 'react'
import { Container } from 'react-bootstrap';

const UserShow = (props) => {
  return (
    <Container>
      <p>Username: {props.user.username}</p>
    </Container>
  )
}

export default UserShow;