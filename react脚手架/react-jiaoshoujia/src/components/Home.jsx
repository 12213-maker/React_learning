import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { setUsername } from '../store/reducer/userRducer';

export default function Home() {
  const [inputValue, setinputValue] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  function fun(e) {
    setinputValue(e.target.value);
    dispatch(setUsername(e.target.value))
  }
  function changepage() {
    history.push('/user');
  }
  return (
    <div>
      {inputValue}
      <input value={inputValue} onChange={e => fun(e)}></input>
      <button onClick={changepage}>跳转到user页面</button>
    </div>
  )
}

