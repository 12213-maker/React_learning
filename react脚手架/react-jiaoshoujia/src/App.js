import React from "react"

export class App extends React.Component {
    constructor() {
        super()
        this.state = {
            counter: 0,
            show:'12'
        }
    }
    render() {
        return (
            <div>
                <h2>{this.state.counter},{this.state.show}</h2>
                <button onClick={e => this.changecounter()}>改变文本</button>
            </div>

        )
    }
    changecounter() {
        //相同的setState操作是会被合并的
        // this.setState({
        //     counter:this.state.counter+1
        // })
        // this.setState({
        //     counter:this.state.counter+1,
        //     show:'21'
        // })
        // this.setState({
        //     counter:this.state.counter+1
        // })

        //想要相同的操作不被合并的方法
        this.setState((prevState,props)=>{
            return {
                counter:prevState.counter+1
            }
        })
        this.setState((prevState,props)=>{
            return {
                counter:prevState.counter+1
            }
        })
        this.setState((prevState,props)=>{
            return {
                counter:prevState.counter+1
            }
        })


        /* 
        总结: 
        在setState中传入对象的话,多次相同的数据改变是会被最后一次覆盖的, 
        因为每一次setState都调用了 Object.assgin({},this.state,{counter:this.state.counter+1})

        当setState中传入函数的时候,函数中两个参数prevState与props , 
        其中的prevState参数在每一次函数执行的时候都会以当下函数的结果作为下一次setState的prevState参数
        从而实现setState的累加效果

        */
    }
}

