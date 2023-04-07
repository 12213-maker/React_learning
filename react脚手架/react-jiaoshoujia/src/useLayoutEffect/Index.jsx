import React, { useLayoutEffect, useState } from 'react'
import { useEffect } from 'react';

export default function Index() {

  const [count, setCount] = useState(10);
  const [count2, setCount2] = useState(10)


  //count变化的时候有闪烁的情况
  //useEffect会在render之后执行
  useEffect(() => {
    if (count2 === 0) {
      setCount2(Math.random() + 200);
    }
  }, [count2])


  //useLayoutEffect 会在render之前执行
  useLayoutEffect(() => {
    if (count === 0) {
      setCount(Math.random() + 200);
    }
  }, [count])

  return (
    <>
      <div style={{ backgroundColor: 'lightpink' }}>
        <span>UseLayoutEffect</span>
        <br />
        <div>{count}</div>
        <button onClick={() => setCount(0)}>changeCount</button>
      </div>
      <div style={{ backgroundColor: 'lightyellow' }}>
        <span>UseEffect</span>
        <br />
        <div>{count2}</div>
        <button onClick={() => setCount2(0)}>changeCount</button>
      </div>
    </>
  )
}
