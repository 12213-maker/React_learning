

import React from "react"
import Proptypes from 'prop-types'

/* 组件之间的通信 */
export default class Header extends React.Component{
    constructor(){
        super()
        this.state={
        }
    }
    render(){
        const {title,changefocus,focus} = this.props
        return (
            <div className="Header-control">
                {
                    title.map((item,index)=>{
                        return <div className={"Header-item "} key={index} onClick={changefocus()}>
                            <span className={(focus===index?'active':'')}>{item}</span>
                        </div>
                    })
                }
            </div>
        )
    }
}

Header.propTypes={
    title:Proptypes.array
}