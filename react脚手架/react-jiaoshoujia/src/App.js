import React, { PureComponent, createRef } from 'react'

class Counter extends PureComponent {
    constructor(){
        super()
        this.state={
            counter:0
        }
    }
  render() {
    return (
      <div>
        <div>{this.state.counter}</div>
        <button onClick={e=>this.increment()}>+1</button>
      </div>
    )
  }
  increment(){
    this.setState({
        counter:this.state.counter+1
    })
  }
}


export default class App extends PureComponent {
    constructor() {
        super()
        this.titleRef = createRef()
        this.counterRef = createRef()
        this.titlefunc = null
    }
    render() {
        return (
            <div>

                {/* //字符串ref------- 弃用 */}
                {/* <div ref='titleRef'>hello world</div>
                <button onClick={e=>this.changetext}>改变文本</button> */}

                {/*       //对象ref  ----- 常用 */}
                <div ref={this.titleRef}>hello world</div>

                {/*       //函数ref */}
                <div ref={(args)=>this.titlefunc = args}>hello world</div>
                <button onClick={e => this.changetext()}>改变文本</button>

                {/* ref也可以在组件中使用,跟vue中的ref一样,父组件都可以通过ref调用子组件中的方法 , 但是不可以在函数式组件中使用ref , 因为他们没有实例  */}
                <Counter ref={this.counterRef}/>
                <button onClick={e=>this.useCounterfunc()}>点击使用子组件的状态</button>
            </div>
        )
    }

    changetext() {
        this.titleRef.current.innerText = '你好 之华'
        console.log(this.titlefunc);
        this.titlefunc.innerText = "你好 扶华"
    }

    useCounterfunc(){
        this.counterRef.current.increment()
    }
}
