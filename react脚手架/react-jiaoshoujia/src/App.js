import React, { PureComponent ,Fragment} from 'react'
import Appcopy from './css-modules/app'
import Home from './css-modules/home'

export default class App extends PureComponent {
  constructor(){
    super()
    this.state={
      counter:0
    }
  }
  render() {
    return (
      <>
        <Appcopy></Appcopy>
        <Home></Home>
      </>

    )
  }
  changeCounter(){
    this.setState({
      counter:this.state.counter+1
    })
  }
}
