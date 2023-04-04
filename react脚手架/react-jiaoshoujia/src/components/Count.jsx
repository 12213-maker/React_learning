import store from '../store/index'
import CountStyled from '../styledComponents/appStyled'
import { useState } from 'react';
import { addAction, subAction, addByNumAction } from '../store/actionCreators'
import { CountSubscribe } from "./CountSubscribe";

export default function Count() {
  const [count, setCount] = useState(store.getState().count);
  const [inputValue, setInputValue] = useState('');

  store.subscribe(() => {
    setCount(store.getState().count);
  })
  function inputchange() {
    store.dispatch(addByNumAction(inputValue));
    setInputValue('');
  }
  return (
    <CountStyled backColor={'lightblue'}>
      <div className='alltitle'>使用传统redux</div>
      <CountSubscribe></CountSubscribe>
      <span className='title'>{count}</span>
      <button onClick={e => store.dispatch(addAction())}>点击加一</button>
      <button onClick={e => store.dispatch(subAction())}>点击减一</button>
      <hr></hr>
      <input value={inputValue} onChange={e => setInputValue(e.target.value)}></input>
      <button onClick={e => inputchange()}>点击重置</button>
    </CountStyled>
  );
}