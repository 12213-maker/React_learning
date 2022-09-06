import React from "react"
import Footer from './component/Footer'
import Header from './component/Header'
import Content from './component/Content'

/* 组件之间的通信 */
class App extends React.Component{
    constructor(){
        super()
        this.state={
            title:['流行','新款','精选'],
            focus:0
        }
    }
    render(){
        return (
            <div className='container'>
                <Header title={this.state.title} changefocus={e=>this.changefocus.bind(this)}/>
                <Content content={this.state.title[this.state.focus]} focus={this.state.focus}/>
                <Footer getValue={(index)=>{this.getValue(index)}}/>
            </div>
        )
    }
   changefocus(e){
        let indey = 0
        this.state.title.filter((item,index)=>{
            if(String(e.target.innerText).indexOf(String(item))!=-1){
                indey = index
                
            }
        })
        this.setState({
            focus:indey
        })
        console.log(this.focus);
    }

    getValue(index){
        console.log(index,this);
    }
}

export default App