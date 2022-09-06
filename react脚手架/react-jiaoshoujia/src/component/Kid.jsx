import React, { Component } from 'react'
import { Usercontext } from '../context/index'


//接受context的时候必须是类组件,不能是函数式组件

export default function Kid() {
    return (
        <Usercontext.Consumer>
            {
                value => {
                    return (
                        <h3>{value.name}</h3>
                    )
                }
            }
        </Usercontext.Consumer>
    )
}
