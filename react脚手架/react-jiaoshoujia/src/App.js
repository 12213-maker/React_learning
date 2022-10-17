import React, { PureComponent } from 'react'
//ref的转发，例如：获取表单元素中的值

// class Kid extends PureComponent {
//     render() {
//         return (
//             <div>
//                 <input value={'一十四洲'} />
//             </div>
//         )
//     }
// }

//forwardRef的转发，forwardRef是一个函数，以render函数作为参数，返回一个组件
const Kid = React.forwardRef((props, refs) => {
    return (
        <div>
            <input value={'一十四洲'} ref={refs}/>
        </div>
    )
})

export default class App extends PureComponent {
    constructor() {
        super()
        this.value = React.createRef()
        this.state = {}
    }
    componentDidMount() {
        console.log(this.value.current.value);
    }
    render() {

        return (
            <div>
                <Kid ref={this.value}></Kid>
            </div>
        )
    }
}
