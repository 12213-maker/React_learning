import { useState, useEffect } from "react";
import store from '../store/index'
import { addAction } from '../store/actionCreators'

//在这个组件里面监听store里面的count的改变
export const CountSubscribe = () => {

  const [count, setCount] = useState(store.getState().count);
  useEffect(() => {
    store.subscribe(() => {
      setCount(store.getState().count);
    })
  })

  useEffect(() => { document.title = `You clicked ${count} times`; });
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => store.dispatch(addAction())}>
        点击count+1
      </button>
    </div>
  );
}