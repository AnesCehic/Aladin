import React, { Component } from 'react';

import './style.scss';

const ErrorMessage = (props) => {
  return (
    <span className="errorMsg" >{props.msg}</span>
  )
}

export default ErrorMessage;