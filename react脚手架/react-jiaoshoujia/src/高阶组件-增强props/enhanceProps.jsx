/* 增强props二 */

import React, { PureComponent, createContext } from 'react'

//创建一个context
const UserContext = createContext({
  nickName: '默认名字',
  level: -1,
  region: '中国'
})

const spreadComponent = function (WrapperComponent) {
  return props => {
    return (
      <UserContext.Consumer>
        {
          user => {
            return (
              <WrapperComponent {...props} {...user}></WrapperComponent>
            )
          }
        }
      </UserContext.Consumer>
    )
  }
}


class Home extends PureComponent {
  render() {
    return (
      <div>
        {`昵称:${this.props.nickName} 等级:${this.props.level} 地区:${this.props.region}`}
      </div>
    )
  }
}



class About extends PureComponent {
  render() {
    return (
      <div>
        {`昵称:${this.props.nickName} 等级:${this.props.level} 地区:${this.props.region}`}
      </div>
    )
  }
}

//现在有一个需求 , 增加一个展示列表的组件
function ListShow(props){
  return (
    <ul>
      {
        // console.log(props)
        Object.keys(props).map((item,index)=>{
          const value = props[item]
          return <li key={index}>{item} : {value}</li>
        })
      }
    </ul>
  )
}


ListShow = spreadComponent(ListShow)
Home = spreadComponent(Home)
About = spreadComponent(About)

export default class App extends PureComponent {
  render() {
    return (
      <div>
        {/* context发送着要发送UserContext.Provider 并且带上属性value */}
        <UserContext.Provider value={{ nickName: '小明', level: 78, region: '中国' }}>
          <Home></Home>
          <About></About>
          <ListShow></ListShow>
        </UserContext.Provider>
      </div>
    )
  }
}