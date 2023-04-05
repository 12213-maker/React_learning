import { Fragment, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
//导入相应的action操作
import { addCounter, subCounter } from '../store/reducer/counterSlice'
import { UserContext } from '../App2.jsx'

export default function Count() {
  //获取context
  const usercontext = useContext(UserContext);
  const dispatch = useDispatch();
  const countValue = useSelector(state => state.count.count);

  const dataValue = useSelector(state => state.dataState.dataValue)
  console.log(dataValue,'Count组件');

  return (
    <Fragment>
      <div style={{ backgroundColor: '#bfa' }}>
        <h2>我是Count组件</h2>
        <span className='title'>{countValue}</span>
        <button onClick={() => dispatch(addCounter(1))}>点击加一</button>
        <button onClick={() => dispatch(subCounter(1))}>点击减一</button>
        <hr></hr>
        <div>{usercontext.name}</div>

      </div>

    </Fragment>
  );
}