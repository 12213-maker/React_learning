import React, { PureComponent } from 'react'
import {EventEmitter} from 'events'

const eventBus = new EventEmitter()

class Home extends PureComponent {

    componentDidMount(){
        eventBus.addListener('sayHello',this.getSayHello)
    }
    
    componentWillUnmount(){
        eventBus.removeListener('sayHello',this.getSayHello)
    }

    getSayHello(){
        console.log(...arguments);
    }

    render() {
        return (
            <div>Home</div>
        )
    }
}
class Profile extends PureComponent {
    render() {
        return (
            <div>Profile
                <button onClick={e=>this.emitEvent()}>点击了Profile的按钮</button>
            </div>
        )
    }

    emitEvent(){
        eventBus.emit('sayHello','hello home',123)
    }
}
export default class App extends PureComponent {
    render() {
        return (
            <div>
                <Home />
                <Profile />
            </div>
        )
    }
}


//如何使用全局事件总线
/* 
 
1. 下载events库
yarn add events

2. 引入evnets 
import {EventEmitter} from 'events'

3. 创建events实例
const eventBus = new EventEmitter()

4. 发送emit (A组件和B组件通信,在A组件中发送)
eventBus.emit(事件名,数据,数据)

5. B组件创建时订阅eventbus接收数据 , 卸载时取消订阅
一般在componentDidMount中订阅 , 在componentWillUnmount中取消订阅
订阅: eventBus.addListener(事件名,回调函数)
取消订阅: eventBus.removeListener(事件名,回调函数)


*/