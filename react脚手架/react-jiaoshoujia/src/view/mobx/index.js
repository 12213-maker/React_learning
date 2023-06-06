/* eslint-disable */

import React, { Fragment, useState } from 'react'
import { observer } from 'mobx-react'
import Num, {count} from '../../store/mobx/index'
const MobxComponent = observer(() => {
  const [name,setName] = useState('lnl');
  const changeName = ()=>{
    setName((pre,cur)=>{
      console.log(pre,cur)
      return 'mushroom'
    })
  }
  return (
    <div>
        <div>
        MobxComponent---
        <span>{Num.num}</span>
        <span>{Num.double}</span>
        </div>
        <button onClick={Num.up}>up</button>
        <button onClick={Num.down}>down</button>
        <hr></hr>
        <Kid></Kid>
        <hr></hr>
        Count
        <div>{count.person?.name}</div>
        <div>{count.person?.age}</div>
        {/* <button onClick={count.setPerson({name:'mushroom',age:'one years old'})}>setPerson</button> */}
        <button onClick={()=>changeName()}>changeName</button>
        <span>{name}</span>
    </div>
    
  )
})

const Kid = observer(()=>{
    return (
        <Fragment>
            <div>Kid--{Num.num}</div>
            <button onClick={Num.down}>kid-down</button>
        </Fragment>
    )
})

export default MobxComponent