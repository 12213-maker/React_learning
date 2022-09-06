import React from "react"
import Parent from './component/Parent'
import { Usercontext } from './context/index'

export class App extends React.Component {
    constructor() {
        super()
        this.state = {
            name: 'tom'
        }
    }
    render() {
        return (

            <div>



                <Usercontext.Provider value={this.state}>
                    <Parent name="jack" />
                </Usercontext.Provider>



            </div>

        )
    }
}

{/* 使用context来跨组件传递 */ }

//1. 创建context对象
//这里我重新创建了一个文件导入了context对象
// export const Usercontext = React.createContext()


//2. 用context对象中的Provider作为组件包裹子组件
{/* <Usercontext.Provider value={this.state}>
    <Parent name="jack" />
</Usercontext.Provider> */}

//3. 在子组件中使用 组件名.contextType = context对象
// Kid.contextType = Usercontext

//4. 在想使用的地方使用this.context.属性名
{/* <div>Kid's name is { this.props.name||this.context.name}</div> */}
