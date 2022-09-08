import React, { PureComponent ,forwardRef , createRef} from 'react'


const ComponentFunc = forwardRef(function(props,ref){
  return (
    <div ref={ref}>forwardRef</div>
  )
})


/* ref的转发 forwardRef(高阶组件,实质上是一个函数)  -->用于给函数组件添加ref */
// 后面我们可以直接用useRef来创建函数的ref
export default class App extends PureComponent {
  constructor(){
    super()
    this.forref = createRef()
  }
  render() {
    return (
      <div>
        <ComponentFunc ref={this.forref}></ComponentFunc>
        <button onClick={e=>console.log(this.forref.current)}>点击打印ref</button>
      </div>
    )
  }
}
