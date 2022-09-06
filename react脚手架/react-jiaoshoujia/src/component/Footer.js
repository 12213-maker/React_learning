

import React from "react"

/* 组件之间的通信 */
export default class Footer extends React.Component{
    render(){
        const {getValue} = this.props
        return (
            <div>
                {/* 由于父组件传递过来的是一个箭头函数,而箭头函数的this不可以被改变,所以this指向父组件 */}
                <h1 onClick={e=>getValue(1)}>我是Footer</h1>
            </div>
        )
    }
}