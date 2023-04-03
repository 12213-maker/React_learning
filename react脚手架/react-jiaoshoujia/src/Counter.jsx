import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './store/counterSlice';


const Counter = () => {
  const [inputValue, setInputValue] = useState(2);

  //读取redux中的值
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();
  function changeCount(flag) {
    flag ? dispatch(increment()) : dispatch(decrement())
  }
  function clickIncrementByAmount() {
    dispatch(incrementByAmount(Number(inputValue)));
    setInputValue('');
  }
  return (
    <>
      <div>{count}</div>
      <button onClick={e => changeCount(1)}>count++</button>
      <button onClick={e => changeCount(0)}>count--</button>
      <hr />
      <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} />
      <button onClick={e => clickIncrementByAmount()}>count+{inputValue}</button>
    </>
  );
}

export default Counter;

/*
    使用configureStore创建 Redux store
        configureStore 接受 reducer 函数作为命名参数
        configureStore 使用的好用的默认设置自动设置 store
    为 React 应用程序组件提供 Redux store
        使用 React-Redux <Provider> 组件包裹你的 <App />
        传递 Redux store 如 <Provider store={store}>
    使用 createSlice 创建 Redux "slice" reducer
        使用字符串名称、初始状态和命名的 reducer 函数调用“createSlice”
        Reducer 函数可以使用 Immer 来“改变”状态
        导出生成的 slice reducer 和 action creators
    在 React 组件中使用 React-Redux useSelector/useDispatch 钩子
        使用 useSelector 钩子从 store 中读取数据
        使用 useDispatch 钩子获取 dispatch 函数，并根据需要 dispatch actions
*/