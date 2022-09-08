import React, { PureComponent } from 'react'
import reactDom from 'react-dom'

/* Protals的使用 , 有什么我们希望一个组件独立于它的父组件出现在任意的位置 */
class Parent extends PureComponent {
  constructor() {
    super()
  }
  render() {
    return (
      reactDom.createPortal(
        this.props.children,
        document.getElementById('protals')
      )
    )
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        App
        <Parent>
          我是独立于整个根节点root之外的一个dom节点
        </Parent>
      </div>
    )
  }
}
