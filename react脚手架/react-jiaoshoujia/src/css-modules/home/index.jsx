import React, { PureComponent } from 'react'
import style from './style.module.css'

export default class Home extends PureComponent {
  render() {
    return (
      <>
        Home
        <div className={style.showme}>showme-Home</div>
      </>
    )
  }
}
