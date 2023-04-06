import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

export default function Count() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    document.title = count;
  }, [count]);
  useEffect(() => {
    console.log('订阅');
    return () => {
      console.log('取消订阅');
    }
  },[])

  return (
    <div>
      <span>{count}</span>
      <hr />
      <button onClick={e => setCount(preCount => preCount + 1)}>点击Count+2</button>

      <hr />
      {show && <Count2></Count2>}
      <button onClick={e => setShow(!show)}>切换</button>
    </div>
  )
}



function Count2() {

  // useEffect(() => {
  //   console.log('订阅');
  //   return () => {
  //     console.log('取消订阅');
  //   }
  // })

  return (
    <div>
      <span>Count2</span>
    </div>
  )
}
