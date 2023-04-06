import React, { memo } from 'react'
import { useCallback } from 'react';
import { useState } from 'react';


/*
  useCallback：对传入的函数进行性能优化
  场景：在一个组件中的函数，传递给子元素进行回调使用的时候，使用useCallback对函数进行处理
  这样父组件中的子组件不会因为，父组件中与自己props无关的值变化而进行重新的加载

*/


//实现父组件中的show改变的时候，子组件不会重新渲染
export default function Callback() {

  const [show, setShow] = useState(true);
  const [count, setCount] = useState(0);

  const addCount = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const addCount2 = () => {
    setCount(count + 1);
  }

  return (
    <div>

      <h3>Show的改变不应该引起子组件的重新渲染</h3>
      <div>{show && 'show'}</div>
      <button onClick={() => setShow(!show)}>changeShow</button>
      <hr />

      <span>{count}</span>
      <hr />
      <Bybutton title='useCallback' increment={addCount}></Bybutton>
      {/*当没有用useCallback的时候，只要父组件重新渲染了，子组件就会进行重新渲染*/}
      <Bybutton title="普通函数" increment={addCount2}></Bybutton>
    </div>
  )
}

const Bybutton = memo((props) => {
  console.log('Kid组件  ' + props.title);
  return (
    <>
      <button onClick={props.increment}>点击Count+1</button>
    </>
  );
})

