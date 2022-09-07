import React, { PureComponent } from 'react'

export default class Parent extends PureComponent {
  render() {
    console.log('Parent-render');
    return (
      <div>Parent</div>

    )
  }
}
