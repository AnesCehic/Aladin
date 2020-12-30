import { Button, Paper } from '@material-ui/core'
import React, { Component } from 'react'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux'

import { watchGetOrders } from '../../redux/OrdersRedux/sagas/getOrdersSaga';
import { FETCHING, GET_ORDERS, MOVE_ORDER } from '../../redux/OrdersRedux/types';

import './style.scss';
import { moveOrder } from '../../redux/OrdersRedux/sagas/moveOrderSaga';
import { EE } from '../../common/eventemitter';
import CustomModal from '../OrderModal';

class ListOfOrders extends Component {

  componentDidMount() {
    this.props.getOrders()
    console.log(this.props.orders)
  }

  handleEditClick = (id) => {
    this.props.deleteOrder()
  }

  render() {

    return(
      <div className="kanban" >
        <Paper className="cardColumns">
          <p>Backlog</p>

          {
            this.props.orders.map(e => {
              return <Paper className="card">
                <p>Title: {e.customer_name}</p>
                <Button onClick={() => this.props.moveOrder(e)}>Click</Button>
              </Paper>
            })
          }
        </Paper>
        <Paper className="cardColumns">
          <p>In progress</p>
          {
            this.props.orders.map(e => {
              return <Paper className="card">
                <p>Title: {e.customer_name}</p>
                <Button onClick={() => EE.emit("openModal", e)}>Click</Button>
              </Paper>
            })
          }
        </Paper>
        <Paper className="cardColumns">
          <p>Delivery</p>
          {
            this.props.orders.map(e => {
              return <Paper className="card">
                <p>Title: {e.customer_name}</p>
                <Button>Click</Button>
              </Paper>
            })
          }
        </Paper>
        <Paper className="cardColumns">
          <p>Done</p>
        </Paper>

        <CustomModal />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteOrder: () => {},
    getOrders: () => dispatch({ type: GET_ORDERS }),
    moveOrder: (id) => dispatch({ type: MOVE_ORDER , payload: { id: id }}) 
  }
}

export default connect((state) => {
  return {
    state,
    orders: state.orders.orders,
  }
}, mapDispatchToProps)(ListOfOrders)