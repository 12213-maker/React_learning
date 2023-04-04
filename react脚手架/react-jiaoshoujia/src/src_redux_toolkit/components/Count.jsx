import { useSelector, useDispatch } from "react-redux";
//导入相应的action操作
import { addCounter, subCounter } from '../store/reducer/counterSlice'

export default function Count() {
  const dispatch = useDispatch();
  // 每当 useSelector 返回的值为新引用时，组件就会重新渲染
  const countValue = useSelector(state => state.count.count);
  return (
    <>
      <span className='title'>{countValue}</span>
      <button onClick={() => dispatch(addCounter(1))}>点击加一</button>
      <button onClick={() => dispatch(subCounter(1))}>点击减一</button>
      <hr></hr>
    </>


  );
}