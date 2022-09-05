import React from "react"
//函数式组件没有生命周期,但是后面可以模拟出来

//相当于另外一个组件
class Cpn extends React.Component{
    render(){
        return <div>我是Cpn组件</div> 
    }
    componentWillUnmount(){
        console.log('componentWillUnmount,此组件被卸载了-Cpn');
    }
    componentDidMount(){
        console.log('Cpn--componentDidMount');
    }
}

class App extends React.Component{
    constructor(){
        super()
        console.log('constructor');
        this.state={
            counter:0,
            isShow:true
        }
    }
    render(){
        console.log('render');
        return (
            
            <div>
                <h1>当前计数: {this.state.counter}</h1>
                <button onClick={e=>this.change1()}>+1</button>
                <button onClick={e=>{this.setState({isShow:!this.state.isShow});console.log(this.state.isShow);}}>切换</button>

                {this.state.isShow && <Cpn/>}
            </div>
        )
    }
    change1(){
        this.setState({
            counter:this.state.counter+1
        })
    }

    componentDidMount(){
        console.log('componentDidMount');
    }
    componentDidUpdate(){
        console.log('componentDidUpdate');
    }
}



export default App