import React, { Component } from 'react'
import { connect } from 'react-redux'
// import Third from './third'

@connect(
    (state, props) => ({
      config: state.config,
    })
)

export default class sub extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="page">
        <h1>我是二级页面</h1>
        {/* <Third />*/}
      </div>
    )
  }
}
