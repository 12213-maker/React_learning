import React, { PureComponent } from 'react'
import styled, { ThemeProvider } from 'styled-components'

const Hyinput = styled.div.attrs({
  //这里面的值也可以作为props在下面模板字符串中作为props使用
  // type:'password'
})`
      //这里面的格式跟普通的css差不多
      background-color: pink;
      color: ${props => props.color};
`


const Pbutton = styled.button`
  border:1px solid red;
  background-color:#bfa;
`
//样式重叠度很高的时候就可以使用继承
const Bbutton = styled(Pbutton)`
  color: red;
  &:active{
    background-color: blue;
  }
`

/* 动态css--真牛逼 */
export default class Home extends PureComponent {
  constructor() {
    super()
    this.state = {
      color: 'green'
    }
  }
  render() {
    return (
      <>

        {/* 这里面的color属性会一并和第五行的type属性作为input函数的props值 */}
      /* <Hyinput color={this.state.color} /> */
        <Hyinput color={this.state.color}>我在那里显示</Hyinput>
        Home
        <div>showme-Home</div>
        <Pbutton>普通按钮</Pbutton>
        <Bbutton>朴素按钮</Bbutton>
      </>
    )
  }
}
