import React from 'react'
import { useReducer } from 'react'

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
}

export default function Home() {

  //useReducer的使用，可以替代useState , 目前还没有看到reducer的真正用处
  /*
    useState 是由 useReducer 构建的
  */
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  function addCount() {
    const action = {
      type: 'increment'
    };
    dispatch(action);
  }
  return (
    <div>
      <h2>Home当前计数：{state.count}</h2>
      <button onClick={() => addCount()}>点击加一</button>
    </div>
  )
}
