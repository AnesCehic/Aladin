import React, { Component } from 'react'
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import OrdersApi from '../../api/OrdersApi';

import { CARPET_STATUSES_SAGA, CARPET_TYPES } from '../../redux/CarpetRedux/types';

class AddOrderReduxForm extends Component {

  componentWillMount() {
    this.props.dispatch({ type: CARPET_TYPES })
    this.props.dispatch({ type: CARPET_STATUSES_SAGA });
  }

  render() {
    return (
      <Container>
        <form onSubmit={this.props.handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
          <Field name="customer" component="input" type="text" placeholder="Customer ID" />
          <Field name="priority" component="input" type="number" placeholder="Priority" />
          
          {/*<Field name="carpet_type" component="select" >
            <option></option>
            {
              this.props.carpetTypes.map(e => {
                return <option value={e._id.$oid}>{e.name}</option>
              })
            }
          </Field>

          <Field name="discount" component="input" type="number" placeholder="Discount" />

          <button type="submit" >Add order</button>*/}
          <button type="submit" >Add order</button>
        </form>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    state,
    carpetTypes: state.carpetStatuses.types,
    carpetStatuses: state.carpetStatuses.value
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
  }
}

AddOrderReduxForm = connect(mapStateToProps, mapDispatchToProps)(AddOrderReduxForm)

export default reduxForm({
  form: "addOrder",
  onSubmit: (values) => {
    OrdersApi.addOrder(values)
      .then(res => {
        console.log("done")
      })
      .catch(err => {
        console.log(err)
      })
  }
})(AddOrderReduxForm);