

import React from "react"

/* 组件之间的通信 */
export default class Header extends React.Component{
    constructor(){
        super()
        this.state={
        }
    }
    render(){
        return (
            <div>
                <h1>我是Header</h1>
            </div>
        )
    }
}