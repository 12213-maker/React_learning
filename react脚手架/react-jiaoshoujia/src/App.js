import React from "react"
//使用类组件
class App extends React.Component{
    constructor(){
        super()
        this.state={
            name:'jack'
        }
    }


    render(){
        const {name} = this.state
        return (
            <div>
                <h2>我是类组件{name}</h2>
            </div>
        )
    }
}
export default App