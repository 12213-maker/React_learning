import React, { PureComponent } from 'react'
import {EventEmitter} from 'events'
//ref的转发，例如：获取表单元素中的值
//结合eventbus使用一下()

//创建evnets实例
const eventbus = new EventEmitter()

//forwardRef的转发，forwardRef是一个函数，以render函数作为参数，返回一个组件
const Kid = React.forwardRef((props, refs) => {
    return (
        <div>
            <input value={props.showinputvalue} ref={refs}/>
        </div>
    )
})

export default class Bpp extends PureComponent {
    
    constructor() {
        super()
        this.value = React.createRef()
        this.inputvalue = React.createRef()
        this.state = {
            showVlaue:'一十四洲',
        }
    }
    componentDidMount(){
        console.log(this.value.current.value);
    }
    render() {

        return (
            <div>
                <input ref={this.inputvalue} onChange={event=>this.f_changevalue(event)} value={this.state.showVlaue}/>
                <button>click change Kid'inputValue</button>
                <Kid showinputvalue={this.state.showVlaue} ref={this.value}></Kid>
            </div>
        )
    }
    f_changevalue(event){
        this.setState({
            showVlaue:event.target.value
        },()=>{
            console.log(this.state.showVlaue);
            eventbus.emit('inputchange',this.state.showVlaue)
        })
    }
}
