import { connect } from 'react-redux';
import React, { Component } from 'react'

import TabelPaginationDemo from '../../components/Pagination/index';
import ListOfOrders from '../../containers/ListOfOrders';

import Select from 'react-select';
import { setSearchInput } from '../../redux/OrdersRedux/actions'
import { Button } from '@material-ui/core';

class Orders extends Component {

  constructor() {
    super();

    this.state = {
      selectOptions: [
        { value: "id", label: "ID" },
        { value: "title", label: "Title" },
      ]
    }
  }

  handleChange = (e) => {
    if(e === null) {
      this.props.setSearchInput("");
      return;
    }

    this.props.setSearchInput(e.value);
  }

  goToAddOrder = () => {
    this.props.history.push("/dashboard/addOrder")
  }

  render() {
    return (
      <div>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }} >
          <h1>Orders</h1>

          <Button color="primary" onClick={this.goToAddOrder} >Add Order</Button>
        </div>

        <br />

        <ListOfOrders outlined="primary" orders={this.props.orders} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    orders: state.orders.orders
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: dispatch,
    setSearchInput: (input) => dispatch(setSearchInput(input))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders);