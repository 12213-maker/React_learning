import React from "react"

export class App extends React.Component {
    constructor() {
        super()
        this.state = {
            message: 'hello world',
            name:'coderwhy'
        }
    }
    render() {
        return (
            <div>
                <h2>{this.state.message}</h2>
                <h2>{this.state.name}</h2>
                <button onClick={e => this.changemessage()}>改变文本</button>
            </div>

        )
    }
    changemessage() {
        this.setState({
            message:'你好 之华'
        })
        //setState传入了一个新的对象,不会覆盖掉state对象中的name属性吗?
        //在react源码中 ---> Object.assgin({},this.state,{message:'你好 之华'})
    }
}

