import React , {Component,PureComponent} from "react"
import Parent from './component/Parent'
import Kid from './component/Kid'
import MemoOther from './component/Other'

export class App extends PureComponent {
    constructor() {
        super()
        this.state = {
            counter:0,
            message:'你好 之华'
        }
    }
    render() {
        console.log('App-render');
        return (

            <div>
                <h2>{this.state.counter}</h2>
                <button onClick={e=>this.increment()}>+1</button>
                <button onClick={e=>this.changeMessage()}>改变文本不触发render</button>
                <Parent/>
                <Kid/>
                <MemoOther/>
            </div>

        )
    }

    //返回true改变setState之后就调用render函数
    //返回false的时候setState之后不会调用render函数
    //有两个参数nextProps,nextState来获取到最新改变的props和state
    // shouldComponentUpdate(nextProps,nextState){
    //     //我们可以通过判断来设置哪一个数据改变时render调用,哪个数据变化时render不调用
    //     if(this.state.counter !== nextState.counter)
    //     return true
    //     return false
    // }


    increment(){
        this.setState({
            counter:this.state.counter+1
        })
    }

    //当我们改变视图中不依赖的数据的时候render也会重复的调用 , 非常影响效率
    //所以我们要阻止改变message数据时候的render的触发,这时候我们就需要用到shouldComponentUpdate方法
    changeMessage(){
        this.setState({
            message:'再见 之华'
        })
    }
}


//我们也可以在类组件中使用PureComponent , 它可以通过简单的比较来优化组件的性能
//这个作用是根据props和state有没有发生变化作为依据来判断要不要调用自身的render函数


//在函数组件中可以使用memo(高阶组件)

