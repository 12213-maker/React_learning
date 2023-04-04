//在这个组件里面监听到count等于0的时候就修改reducer中的subCounter
import { useSelector } from "react-redux";

export const CountSubscribe = () => {
  const countValue = useSelector(state => state.count.count)

  return (
    <div>
      <h2>CountSubscribe组件</h2>
      count=0 : 禁止减一
      <hr />
      我是另一个组件里面的count： {countValue}
    </div>
  );
}