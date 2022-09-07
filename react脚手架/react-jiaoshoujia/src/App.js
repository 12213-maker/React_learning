import React, { Component } from 'react'

export default class App extends Component {
    constructor(){
        super()
        this.state={
            name:'你好 之华',
            age:18
        }
    }
  render() {
    console.log('render');
    return (
      <div>
        {this.state.name}
        {this.state.age}
        <br></br>
        <button onClick={e=>this.changeAge()}>改变age</button>
      </div>
      
    )
  }
  shouldComponentUpdate(nextProps,nextState){
    if(nextState.age !== this.state.age){
        return true
    }

    return false
  }
  changeAge(){
    //如果直接通过state改变数据 , 那么shouldComponentUpdate 和 PureComponent(浅层比较)是不会生效的
    this.state.age++
    this.setState({
        age:this.state.age
    })
  }
}
