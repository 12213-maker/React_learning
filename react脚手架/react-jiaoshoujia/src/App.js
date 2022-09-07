import React from "react"

export class App extends React.Component {
    constructor() {
        super()
        this.state = {
            message: 'hello world'
        }
    }
    render() {
        // console.log(this.state.message);
        return (
            <div>
                <h2>{this.state.message}</h2>
                <button onClick={e => this.changemessage()}>改变文本</button>
            </div>

        )
    }
    changemessage() {
        // this.setState({
        //     message:'你好 之华'
        // })
        // console.log(this.state.message);

        //拿到setState更新后的最新数据 - 方式一
        // this.setState({
        //     message:'你好 扶华'
        // },()=>{
        //     console.log(this.state.message);
        //
        // })


        //让setState变成同步方式一  , 还有一种方法就是在js原生方法中使用setState
        setTimeout(() => {
            this.setState({
                message: '你好 之华'
            })
            console.log(this.state.message);
        }, 0)
    }

    //获取立即更新数据方式二: 
    componentDidUpdate() {
        // console.log(this.state.message);
    }
}


/* 
1. 为什么要使用setState?为什么不能使用state改变数据状态?
如果用state改变数据状态的话,视图是不会被重新渲染的,只有通过setState改变数据视图才会发送改变

2. setState是异步更新还是同步更新?
setState在不同的使用方式中更新状态是不一样的
--在组件生命周期或React合成事件中,setState是异步的
--在setTimeout或者原生dom事件中,setState是同步的
*/
