import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  constructor(){
    super()
    this.state={
      username:'嘿嘿嘿'
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={e=>this.formSubmit(e)}>
          <label htmlFor='username'>

            {/* 这个input就叫做受控组件,感觉有点像是vue中的双向绑定 */}
            <input 
            id='username' 
            type='text' 
            onChange={e=>this.inputValueChange(e)}
            value={this.state.username}></input>
          </label>

          {/* 现在input是默认提交的,但是我们希望在react中监听提交事件所以在form中添加onSubmit */}
          <input type='submit'></input>
        </form>
      </div>
    )
  }
  formSubmit(event){
    //取消表单的默认行为
    event.preventDefault();
    
  }
  inputValueChange(event){
    console.log(event.target.value);
    this.setState({
      username:event.target.value
    })
  }
}
