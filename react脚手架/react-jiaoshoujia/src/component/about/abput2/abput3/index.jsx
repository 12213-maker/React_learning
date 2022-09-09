import React, { PureComponent } from 'react'
//使用craco给文件重新命名方便引入
import Home from '@/component/home'

export default class About extends PureComponent {
  render() {
    return (
      <div>
        about
        <Home></Home>
      </div>
    )
  }
}
