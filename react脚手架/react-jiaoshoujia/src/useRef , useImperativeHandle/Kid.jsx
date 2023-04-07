import React, { forwardRef } from 'react'
import { useRef } from 'react';
import { useImperativeHandle } from 'react';
import { useState } from 'react';


export const Kid = forwardRef((props, ref) => {
  const [count, setCount] = useState(0);
  const inputRef = useRef();

  //通过useImperativeHandle来决定对父组件暴露ref的对象
  useImperativeHandle(ref, () => ({
    addCount,
    showinput: (data) => {
      inputRef.current.value=data
    }
  }));


  function addCount(emit) {
    console.log('我被' + emit + '调用了');
    setCount(count + 1);
  }
  return (
    <div style={{backgroundColor:'lightyellow'}}>
      <h2>Kid组件</h2>
      <br />
      <h2>Kid组件中的count： {count}</h2>
      <br />
      <button onClick={() => addCount('Kid')}>count+1</button>
      <br />
      <input type="text" ref={inputRef} />
    </div>
  )
})