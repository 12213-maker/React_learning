import React from "react"
import NavBar from './component/NavBar'

/* react实现插槽的方法是,直接将jsx作为数据传递给子组件 */
class App extends React.Component{
    constructor(){
        super()
        this.state={
            nav1:[<div>左边</div>,<div>中间</div>,<div>右边</div>],
            nav2:[<div>左边2</div>,<div>中间2</div>,<div>右边2</div>],
            nav3:[<div>左边3</div>,<div>中间3</div>,<div>右边3</div>],
        }
    }
    render(){
        const {nav1,nav2,nav3} = this.state
        return (
            <div className='container'>
                <NavBar nav1={nav1}/>
                <NavBar nav1={nav2}/>
                <NavBar>{nav3}</NavBar>
            </div>
        )
    }
}

export default App