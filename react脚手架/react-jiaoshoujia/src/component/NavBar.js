

import React from "react"

/* 组件之间的通信 */
export default class NavBar extends React.Component{
    constructor(){
        super()
        this.state={
        }
    }
    componentDidMount(){
        console.log(this.props.children);
    }
    render(){
        const {nav1} = this.props
        return (
            <div style={{display:'flex',}}>
                {/* {nav1[0] || this.props.children[0].props.children}
                {nav1[1] || this.props.children[1].props.children}
                {nav1[2] || this.props.children[2].props.children} */}
            </div>
        )
    }
}
