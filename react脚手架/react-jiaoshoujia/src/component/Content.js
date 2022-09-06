
// import React from "react"

// /* 父子组件之间的通信 */


// class Add extends React.Component{
//     render(){
//         /* 主要就是需要解决这个传过来的函数的this指向问题 */

//         //这是我自己想的方法,父组件给子组件传递一个函数,在父组件中的函数中改变父组件state中数据的值,必须得到父组件中的this
//         // return <button onClick={this.props.incrementclick.bind(this.props.this)}>+</button>


//         //然后看到老师有一个更好的方法,直接在函数传过来的时候就bind绑定它的this
//         // <Add incrementclick={this.increment.bind(this)}/> 这是父组件中的bind绑定
//         return <button onClick={this.props.incrementclick}>+</button>
   
//     }
// }

// export default class Content extends React.Component{
//     constructor(){
//         super()
//         this.state={
//             counter:0
//         }
//     }
//     render(){
//         return (
//             <div>
//                 当前计数{this.state.counter}
//                 <br></br>
//                 {/* 直接这样箭头函数也可以解决this指向问题 */}
//                 <Add incrementclick={e=>this.increment()}/>
//             </div>
//         )
//     }

//     /* 这样也可以解决this的指向问题 */
//     increment(){
//         this.setState({
//             counter:this.state.counter+1
//         })
//     }
// }



//下面实现一个小案例

import React from "react"

/* 父子组件之间的通信 */




export default class Content extends React.Component{
    componentDidUpdate(){
        console.log(this.props);
    }
    render(){
        return (
            <div>
                {this.props.content}
            </div>
        )
    }
}