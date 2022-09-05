import React from "react"
//使用类组件
// class App extends React.Component{
//     constructor(){
//         super()
//         this.state={
//             name:'jack'
//         }
//     }


//     render(){
//         const {name} = this.state
//         return (
//             <div>
//                 <h2>我是类组件{name}</h2>
//             </div>
//         )
//     }
// }


//使用函数式组件
/* 特点:1.没有this
2.hooks->解决状态保存问题 */
function App(){
    return (
        <div>我是函数式组件</div>
    )
}

export default App