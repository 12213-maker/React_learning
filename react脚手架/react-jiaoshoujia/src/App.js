import React, { PureComponent, useMemo, useState } from "react"
import Parent from './component/Parent'
import Kid from './component/Kid'
import MemoOther from './component/Other'

export class App extends React.Component {
    constructor() {
        super()
        this.state = {
            counter: 0,
            message: '你好 之华'
        }
    }
    render() {
        return (
            <div>
                <h2>{this.state.message}</h2>
                <h2>{this.state.name}</h2>
                <h2>{this.state.counter}</h2>
                <button onClick={e => this.increment()}>+1</button>
                <button onClick={e => this.changeMessage()}>改变文本不触发render</button>
                <Parent />
                <Kid />
                <MemoOther />
                {/* <Father></Father> */}
                <UseMemoDemo></UseMemoDemo>
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


    increment() {
        this.setState({
            counter: this.state.counter + 1
        })
        //setState传入了一个新的对象,不会覆盖掉state对象中的name属性吗?
        //在react源码中 ---> Object.assgin({},this.state,{message:'你好 之华'})
    }

    //当我们改变视图中不依赖的数据的时候render也会重复的调用 , 非常影响效率
    //所以我们要阻止改变message数据时候的render的触发,这时候我们就需要用到shouldComponentUpdate方法
    changeMessage() {
        this.setState({
            message: '再见 之华'
        })
    }
}


//我们也可以在类组件中使用PureComponent , 它可以通过简单的比较来优化组件的性能
//这个作用是根据props和state有没有发生变化作为依据来判断要不要调用自身的render函数


//在函数组件中可以使用memo(高阶组件)

// function Father() {
//     const [count, setCount] = useState(0);
//     function addCount() {
//         setCount((count)=>count+1)
//     }
//     return (
//         <div>
//             <h2>{count}</h2>
//             <button onClick={e => addCount()}>点击加一</button>
//             <ChildMemo></ChildMemo>
//         </div>
//     );
// }

// function Child() {
//     console.log('child');
//     return(
//         <div>child</div>
//     );
// }

// const ChildMemo =  React.memo(Child);

//useMemo 
/* 
使用场景：
        1.子组件
        2.需要大量计算时间的渲染场景
        3.传入给子组件的函数（避免再次渲染改变引用地址，从而导致子组件的更新）
*/



//使用useMemo缓存变量和函数,包括子组件
//下面这个组件做到了点击count++的时候,其它任何无关的东西没有重新进行计算和渲染
function UseMemoDemo() {
    const [count, setCount] = React.useState(0);

    //使用useMemo缓存一个变量
    const calculatedCount = useMemo((() => {
        let res = 0;
        const startTime = Date.now();
        for (let i = 0; i <= 100000000; i++) {
            res++;
        }
        console.log(`Calculated Count 计算耗时：${Date.now() - startTime} ms`);
        return res;
    }), [])
    //使用useMemo缓存一个函数
    const giveAFun = useMemo(
        () => {
            //还要返回一个函数
            return () => {
                console.log('giveFun');
            }

        }, []
    )
    //使用useMemo缓存一个组件
    const ChildUseMemo2 = useMemo(() => <ChildUseMemo />, [])

    return (
        <div>
            <div>Parent Count: {count}</div>
            <button onClick={() => setCount(count => count + 1)}>+</button>
            {/* 
                calculatedCount是一个计算消耗很大的函数,每次count改变的时候都要重新计算一遍它,
                这是没有必要的性能消耗,使用useMemo,并且传入一个[],来避免它的每次的渲染
            */}
            <div>Calculated Count: {calculatedCount}</div>
            <Child fun={giveAFun}></Child>
            {ChildUseMemo2}
        </div>
    );
}


const Child = React.memo(
    function Child() {
        console.log('Child');
        return (
            <div>child</div>
        );
    })

function ChildUseMemo() {
    console.log("ChildUseMemo it's me");
    return (
        <div>ChildUseMemo it's me</div>
    );
}
