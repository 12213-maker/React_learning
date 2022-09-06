import React, { Component } from 'react'
import {Usercontext} from '../context/index'


//接受context的时候必须是类组件,不能是函数式组件

export default class Kid extends Component {
  render() {
    console.log(Usercontext);
    return (
      <div>Kid's name is { this.props.name||this.context.name}</div>

    )
  }
}

Kid.contextType = Usercontext
