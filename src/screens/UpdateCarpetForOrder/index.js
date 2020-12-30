import { ThreeDRotationSharp } from '@material-ui/icons'
import React, { Component } from 'react'
import CarpetApi from '../../api/CarpetApi'

export default class updateCarptetForOrder extends Component {

  state = {
    width: 0,
    height: 0,
    type: null,
    types: [],
  }

  componentDidMount() {
    CarpetApi.getCarpetTypes()
      .then(res => {
        this.setState({
          types: res.data
        })

        return CarpetApi.getCarpterData(this.props.match.params.id)
      })
      .then(res => {
        this.setState({
          width: res.data.width,
          height: res.data.length,
          type: res.data.carpet_type
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onChangeSelect = (e) => {
    let type = this.state.types.find(type => type._id.$oid === e.target.value);
    this.setState({
      [e.target.name]: type
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    CarpetApi.updateCarpterData(this.props.match.params.id, {
      width: this.state.width,
      length: this.state.height,
      carpet_type: this.state.type._id.$oid
    }).then(res => {
      alert("Updated");
    }).catch(err => {
      console.log(err);
    })

  }

  render() {
    return (
      <div>
        <h1>Update carpet data</h1>

        <form onSubmit={this.handleSubmit}>
          <input type="number" value={this.state.width} step=".01" name="width" onChange={this.onChange} placeholder="Width" />
          <input type="number" step=".01" name="height" value={this.state.height} placeholder="Length" onChange={this.onChange} />
          <select value={this.state.type && this.state.type._id.$oid} name="type" onChange={this.onChangeSelect}>
            <option value="">Select carpet type</option>
            {
              this.state.types.map((e, index) => {
                return <option key={index} value={e._id.$oid}>{e.name}</option>
              })
            }
          </select>

          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}