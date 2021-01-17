import React, { Component } from 'react'
import { connect } from 'react-redux'
import CarpetApi from '../../../api/CarpetApi'
import { CARPET_TYPES } from '../../../redux/CarpetRedux/types'

class Types extends Component {

  state = {
    types: []
  }

  componentDidMount() {
    CarpetApi.getCarpetTypes()
      .then(res => {
        this.setState({
          types: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    const { types } = this.state;
    return (
      <div>

        <ul style={{ listStyleType: "none" }}>
          {
            types.map((e, index) => {
              return <li style={{ borderBottom: "1px solid black", borderRadius: "5px", boxShadow: "5px 5px 5px #faca0f", padding: "10px", margin: "20px", width: "200px" }} key={index}>{e.name}: {e.price_per_surface}</li>
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