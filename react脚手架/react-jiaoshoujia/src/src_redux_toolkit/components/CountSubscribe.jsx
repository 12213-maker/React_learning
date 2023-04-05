//在这个组件里面监听到count等于0的时候就修改reducer中的subCounter
import { useSelector, useDispatch } from "react-redux";
// import axios from "axios";
import { useEffect, useState } from "react";
import { setData, fetchData } from '../store/reducer/dataSlice'

//请求axios，再放到redux中去
export const CountSubscribe = () => {
  const countValue = useSelector(state => state.count.count);
  const [dataValue, setDataValue] = useState();
  const dispatch = useDispatch();
  //在组件挂载的时候就获取数据保存到store中
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch])

  return (
    <div style={{ backgroundColor: 'lightyellow' }}>
      <h2>CountSubscribe组件</h2>
      count=0 : 禁止减一
      <hr />
      我是另一个组件里面的count： {countValue}
    </div>
  );
}