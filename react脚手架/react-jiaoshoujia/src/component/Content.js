
import React from "react"

import PropTypes from 'prop-types'//实现props属性验证

/* 父子组件之间的通信 */


/* 直接作为参数就可以获取到父组件传递过来的props */
function Swiper(props){
    const {name,age} = props 
    return <div>我是轮播图{name+age}</div>
}


//在这里进行Swiper组件中的props属性验证
Swiper.propTypes = {
    name:PropTypes.string.isRequired,//拥有isRequired就表示必须传递过来
    age:PropTypes.number
}

//还可以默认定义属性值
Swiper.defaultProps={
    name:'lnl',
    age:18
}


/* 在类组件中的父传子 */
class List extends React.Component{

    //在类组件中也可以这样验证和默认props
    static propTypes = {

    }
    static defaultProps={

    }

    //---------初始的样子------------
    // constructor(props){
    //     super()
    //     this.props = props
    // }
    
    //---------第二步变化----------
    //把props给父类实现this.props=props , 但实际上通过继承这个props是绑定在子类身上的
    // constructor(props){
    //     super(props)
    // }


    //---------第三步变化----------
    /*代码全部删去,因为第二段代码是默认执行的 */



    /* 综上所述,props可以直接在子类中通过this.props直接使用 */
    render(){
        return (
            <div>
                <p>{this.props.name}</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
            </div>
        )
    }
}

export default class Content extends React.Component{
    constructor(){
        super()
        this.state={
        }
    }
    render(){
        return (
            <div>
                <Swiper name="我给函数组件传递数据(父传子)" />
                <List name="我给类组件传递数据(父传子)"/>
            </div>
        )
    }
}