/*
 * @Author: laichengliang
 * @Date: 2018-06-29 15:34:19
 * @Last Modified by: laichengliang
 * @Last Modified time: 2018-08-14 17:27:56
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'

import Sub from './sub'

@connect(
    (state, props) => ({
      config: state.config,
    })
)

export default class popCheck extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: true,
    }
  }

  componentDidMount() {
    console.log(this.props)
  }

  render() {
    return (
      <div className="page">
        测试
        <span>weorwe</span>
        <img src="../../images/default.png" />
        <Sub />
      </div>
    )
  }
}
