import React, { PureComponent } from 'react'


/* 通过高阶组件进行鉴权操作 , islogin:true展示CartPage页面 , false退出这个页面 */

const loginDoor = function(WrapperComponent){
    const LoginDoor =  props=>{
        if(props.isLogin){
            return (
                <WrapperComponent></WrapperComponent>
            )
        }
        else{
            return <div>请登录</div>
        }
    }
    LoginDoor.displayName = "enhanceFunc"
    return LoginDoor
}


 class CartPage extends PureComponent {
  render() {
    return (
      <div>CartPage</div>
    )
  }
}


CartPage = loginDoor(CartPage)

export default class DetailRight extends PureComponent {
    constructor(){
        super()
        this.state={
            islogin:false
        }
    }
  render() {
    return (
      <div>
        {String(this.state.islogin)}
        <CartPage isLogin={this.state.islogin}></CartPage>
        <button onClick={e=>this.changeLoginStatus()}>{this.state.islogin?'退出':'登录'}</button>
      </div>
    )
  }
  changeLoginStatus(){
    this.setState((prevState,prevProps)=>{
        return {
            islogin:!prevState.islogin
        }
    })
  }
}
