import React, { PureComponent ,Fragment} from 'react'
import Appcopy from './styled-components/app'
import Home from './styled-components/home'
import { ThemeProvider } from 'styled-components'

export default class App extends PureComponent {
  constructor(){
    super()
    this.state={
      counter:0
    }
  }
  render() {
    return (
      //这个项目的主题
      <ThemeProvider theme={{ themeColor: "yellow" }}>
        <Appcopy></Appcopy>
        <Home></Home>
      </ThemeProvider>

    )
  }
  changeCounter(){
    this.setState({
      counter:this.state.counter+1
    })
  }
}
