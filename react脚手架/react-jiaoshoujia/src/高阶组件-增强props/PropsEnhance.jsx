/* 高阶组件的用途 */

import React, { PureComponent,createRef } from 'react'


//1.增强props一

const enhanceRegionProps = function(WrapperComponent){
    return props=>{
      return <WrapperComponent {...props} region="中国"/>
    }
}


class Home extends PureComponent {
  constructor(){
    super()
    this.clickblur = createRef()
  }
  render() {
    return (
      <div>
        Home
        {`昵称:${this.context.nickName} 等级:${this.context.level} 地区:${this.context.region}`}
      </div>
    )
  }
}

Home = enhanceRegionProps(Home)

class About extends PureComponent {
  render() {
    return (
      <div>
        About
        {`昵称:${this.context.nickName} 等级:${this.context.level} 地区:${this.context.region}`}
      </div>
    )
  }
}
About = enhanceRegionProps(About)
export default class App extends PureComponent {
  render() {
    return (
      <div>
        App
        <About nickName="你好 之华" level={90} />
        <Home nickName="你好 扶华" level={100} />
      </div>
    )
  }
}