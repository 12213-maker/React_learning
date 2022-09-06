import React, { Component } from 'react'
import Kid from './Kid'

export default class Parent extends Component {
  render() {
    return (
      <div>Parent
        {/* 也可以这样写,表示props默认展开 */}
          <Kid {...this.props}/>
          <Kid name={this.props.name}/>

        
        
          <Kid/>
      </div>
    )
  }
}
