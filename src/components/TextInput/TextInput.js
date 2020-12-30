import { TextField } from '@material-ui/core';
import React from 'react'
import { Form } from 'react-bootstrap'

const TextInput = ({ field, ...props }) => {
  return(
    // <Form.Control {...field.input} type={field.type} placeholder={field.placeholder} name={field.name} />
    <TextField

      {...field}
      {...props}
      label={props.label}
      type={props.type}
      variant="outlined"
      style={{
        marginBottom: "10px"
      }}
    />
  )
}

export default TextInput;