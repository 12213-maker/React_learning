import React from "react"

export class App extends React.Component {
    constructor() {
        super()
        this.state = {
            message: 'hello world',
            name: 'coderwhy',
            counter: 0
        }
    }
    render() {
        return (
            <div>
                <h2>{this.state.message}</h2>
                <h2>{this.state.name}</h2>
                <h2>{this.state.counter}</h2>
                <button onClick={e => this.changemessage()}>改变文本</button>
                <button onClick={e => this.Counteradd()}>counter++</button>

            </div>

        )
    }
    changemessage() {
        this.setState({
            message: '你好 之华'
        })
        //setState传入了一个新的对象,不会覆盖掉state对象中的name属性吗?
        //在react源码中 ---> Object.assgin({},this.state,{message:'你好 之华'})
    }
    Counteradd() {
        //这样就不会在异步更新队列里面合并成一次更新
        this.setState((prevState) => {
            return { counter: prevState.counter + 1 }
        })
        this.setState((prevState) => {
            return { counter: prevState.counter + 1 }
        })
        this.setState((prevState) => {
            return { counter: prevState.counter + 1 }
        })
    }
}

