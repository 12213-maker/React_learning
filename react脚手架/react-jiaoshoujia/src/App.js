import React from "react"
import Footer from './component/Footer'
import Header from './component/Header'
import Content from './component/Content'

/* 组件之间的通信 */
class App extends React.Component{
    constructor(){
        super()
        this.state={
        }
    }
    render(){
        return (
            <div className='container'>
                <Header/>
                <Content/>
                <Footer/>
            </div>
        )
    }
}

export default App