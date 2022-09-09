import React, { PureComponent } from 'react'
import style from './style.module.css'

export default class Appcopy extends PureComponent {
    constructor(){
        super()
        this.state={
            color:'blue'
        }
    }
  render() {
    return (
      <>
        app
        <div className={style.showme} style={{color:this.state.color}}>showme</div>
        <button onClick={e=>this.setState({color:'red'})}>点击切换颜色</button>
      </>
    )
  }
}
