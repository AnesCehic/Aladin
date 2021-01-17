import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { EE } from '../../common/eventemitter';

import { Formik, Form, Field } from 'formik';
import TextInput from '../../components/TextInput/TextInput';
import instance from '../../axios';

class CustomModal extends Component {

  constructor() {
    super();

    this.state = {
      show: false,
      order: {},
      order_type: "",
    }
  }

  componentDidMount() {
    EE.on('openModal', (a) => {
      console.log(a)
      this.setState({
        show: true,
        order: a
      })
    })

    this.setState({
      order_type: ""
    })

    //instance.get('/api/carpet_orders/')
  }

  componentWillUnmount() {
    EE.removeListener('openModal')
  }

  hideModal = () => {
    this.setState({
      show: false,
    })
  }

  deleteOrder = (id) => {
    console.log(id)
  }

  componentDidUpdate() {
    if(this.state.order === "") {
      if(this.state.order.carpet_type.$oid) {
        this.setState({
          order_type: this.state.order.carpet_type.$oid,
        })
      }
    }
  }

  renderEditForm = () => {
    // TODO populate data
    const { order } = this.state;
    // console.log("ORDER :", order)
    // console.log(order.carpet_type)
    return (
      <Formik
        initialValues={{
          width: order.width,
          length: order.length,
          customer_name: order.customer_name,
          address: order.address,
          discount: order.discount,
          carpet_type: this.state.orde,
        }}
        onSubmit={(values) => {
          // console.log(values)
        }}
      >
        <Form style={{ display: "flex", flexDirection: "column" }} >
          <Field name="width" label="Width" component={TextInput} type="number" />
          <Field name="length" label="Length" component={TextInput} type="number" />

          <Field name="customer_name" label="Customer name" component={TextInput} />
          <Field name="address" label="Address" component={TextInput} type="text" />

          <Field name="discount" label="Discount" component={TextInput} type="number" />
          <Field name="carpet_type" label="Type" component={TextInput} type="text" />
          {/* <Field as="select" name="carpet_type">
            <option >--- Select type ---</option>
            <opntion >ID</opntion>
          </Field> */}
        </Form>
      </Formik>
    )
  }

  render() {
    return (
      <Modal show={this.state.show} onHide={this.hideModal} style={{ marginTop: "100px" }} >
        <Modal.Header>
          Edit a carpet order
        </Modal.Header>
        <Modal.Body>
          {this.renderEditForm()}
        </Modal.Body>
        <Modal.Footer>
          <Button>Save</Button>
          <Button variant="secondary" onClick={() => this.setState({ show: false })}>Cancel</Button>
          <Button variant="danger" onClick={() => this.deleteOrder(this.state.order._id.$oid)}>Delete</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default CustomModal;