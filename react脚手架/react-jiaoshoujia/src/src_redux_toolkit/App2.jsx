import { PureComponent } from "react";
import { createContext } from "react";
import Count from "./components/Count";
import { CountSubscribe } from "./components/CountSubscribe";
import App2Styled from "./styledComponents/countStyled";

//回顾context的操作
export const UserContext = createContext();

export default function App2() {
  return (
    <UserContext.Provider value={{ name: '我是通过context组件来进行传值的' }}>
      <App2Styled backColor={'lightblue'}>
        <div className='alltitle'>使用redux-toolkit</div>
        <Count></Count>
        <CountSubscribe></CountSubscribe>
      </App2Styled>
      <AppContext></AppContext>
    </UserContext.Provider>

  );
}

//类组件怎么使用context
class AppContext extends PureComponent {
  static contextType = UserContext;
  render() {
    return (
      <>
        <h2>我是一个类组件</h2>
        {this.context.name}
      </>
    );
  }
}