import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CARPET_STATUSES_SAGA } from '../../../redux/CarpetRedux/types'

class Statuses extends Component {

  componentDidMount() {
    this.props.dispatch({ type: CARPET_STATUSES_SAGA });
  }

  render() {
    let { carpetStatuses } = this.props.state;

    return (
      <div>
        <ul>
          {
            carpetStatuses.value.map(e => {
              return <li key={e._id.$oid}>{e.value}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    state,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Statuses);