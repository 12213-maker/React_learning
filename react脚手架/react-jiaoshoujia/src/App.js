/* eslint-disable */
import React, { Suspense, useState } from 'react'
import { RecoilRoot } from 'recoil';

import MobxComponent from './view/mobx/index'
import RecoilComponent from './view/recoil/index'
import Zusand from './view/zusand';


export default function App() {
    const [mobx,setMobxShow] = useState(false);
    const [recoil,setRecoilShow] = useState(false);
    const [zusand,setZusandShow] = useState(false)
    const setShow = ()=>{
        setMobxShow(false)
        setRecoilShow(false)
        setZusandShow(false)
    }
  return (
    <div>
        <div style={{display:'flex',flexDirection:'row',width:'300px',justifyContent:'space-between',cursor:'pointer'}}>
            <div onClick={()=>{setShow();setMobxShow(true)}}>Mobx</div>
            <div onClick={()=>{setShow();setRecoilShow(true)}}>Recoil</div>
            <div onClick={()=>{setShow();setZusandShow(true)}}>Zusand</div>
        </div>
        {mobx&&<MobxComponent></MobxComponent>}
        {recoil&& 
        <RecoilRoot>
            <Suspense fallback={<div>loading...</div>}>
                <RecoilComponent/>
            </Suspense>
        </RecoilRoot>}
        {zusand&&<Zusand></Zusand>}
    </div>
  )
}
