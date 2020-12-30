import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CARPET_TYPES } from '../../../redux/CarpetRedux/types'

class Types extends Component {

  componentDidMount() {
    this.props.dispatch({ type: CARPET_TYPES });
  }

  render() {
    const { types } = this.props.state.carpetStatuses;
    return (
      <div>
        <h1>Types</h1>

        <ul>
          {
            types.map((e, index) => {
              return <li key={index}>{e.name}: {e.price_per_surface}</li>
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

export default connect(mapStateToProps, mapDispatchToProps)(Types);