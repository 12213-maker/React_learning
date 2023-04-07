import React, { useEffect } from 'react'
import { useState } from 'react';
import { useRef } from 'react'
import { Kid } from './Kid'


/*
useRef返回一个ref对象，返回的ref对象在整个生命周期中保持不变
最常用的ref是两种用法：
    1.引入DOM元素
    2.保存一个数据，这个对象在整个生命周期中可以保持不变

useRef 通常和 useImperativeHandle ， forwardRef 结合使用
*/

export default function Parent() {
  //通过kidRef调用子组件中的方法
  const kidRef = useRef();

  function usekidfun() {
    kidRef.current.addCount('Parent');
  }
  function changeinput(e) {
    kidRef.current.showinput(e.target.value);
  }
  return (
    <div>
      <h2>Parent组件</h2>
      <div style={{ backgroundColor: 'lightblue' }}>
        <div>通过父组件控制子组件中的方法</div>
        <button onClick={usekidfun}>让子组件中的count+1</button>
        <br />

      </div>
      <div style={{backgroundColor:'lightgreen'}}>
        <span>实现input输入的时候，子组件中的input跟着一起改变</span>
        <br />
        <input type="text" onChange={e=>changeinput(e)} />
        <hr />
      </div>

      <Kid ref={kidRef}></Kid>



      {/*利用useRef保存count上一次的值*/}
      {/* <Comp2></Comp2> */}
    </div>
  )
}



function Comp2() {
  const [count, setCount] = useState(0);
  //ref指定了一个值之后，是不会改变的，除非手动改变
  const countRef = useRef(count);
  //页面渲染完成了之后才会执行useEffect，所以countRef始终保持着上一次的count值
  useEffect(() => {
    countRef.current = count
    console.log(countRef.current);
  }, [count])
  function changeCount() {
    setCount(count + 1);
  }
  return (
    <>
      <span>变化之前的count{countRef.current}</span>
      <br />
      <span>变化之后的count{count}</span>
      <button onClick={() => changeCount()}>count++</button>
    </>
  );
}