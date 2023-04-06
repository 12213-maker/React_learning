import React, { memo } from 'react'
import { useMemo } from 'react';
import { useState } from 'react'


/*
useMemo: 对返回值进行优化（返回值可以是值，可以是函数），所以可以通过useMemo实现useCallback
      1.对大量的计算结果进行缓存
      2.对传入子组件的引用类型进行缓存
*/

const calcNumber = (num, title) => {
  console.log('计算count  ' + title);
  const arr = new Array(num).fill(0).map((item, index) => index);
  return arr.reduce((acc, next) => acc + next);
}

export default function Memo() {
  const [count, setCount] = useState(10);
  const [show, setShow] = useState(true);
  const userinfo = { name: 'lnl', age: 21 }
  const userinfo_useMemo = useMemo(() => {
    return userinfo;
  }, [])

  const NumberResult = useMemo(() => calcNumber(count, 'useMemo'), [count]);

  return (
    <div>
      <button onClick={() => setShow(!show)}>changeshow</button>
      <br />
      <span>{show && 'show改变的时候不要引起calcNumber的重新计算'}</span>
      <hr />

      <div style={{ backgroundColor: 'lightblue', padding: '30px' }}>
        <h3 style={{ color: 'red' }}>useMemo使用1：对大量的计算结果进行缓存</h3>
        <span>普通函数计算结果： {calcNumber(count, '不使用useMemo')}</span>
        <br />
        <span>通过useMemo对计算结果进行缓存:  {NumberResult}</span>
      </div>
      <div style={{ backgroundColor: 'lightpink', padding: '30px' }}>
        <h3 style={{ color: 'green' }}>useMemo使用2：对传入子组件的对象引用进行缓存</h3>
        <Kid title='不使用useMemo' userinfo={userinfo}></Kid>
        <Kid title='useMemo缓存' userinfo={userinfo_useMemo}></Kid>
      </div>
    </div>
  )
}


const Kid = memo((props) => {
  console.log('kid组件进行重新渲染', props.title);
  return (
    <>
      <div> <span style={{ color: 'red', fontSize: '20px' }}>{props.title} </span> name: {props.userinfo.name} , age: {props.userinfo.age}</div>
    </>
  );
})

