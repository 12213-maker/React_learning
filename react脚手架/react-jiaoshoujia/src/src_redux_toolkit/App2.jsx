import Count from "./components/Count";
import { CountSubscribe } from "./components/CountSubscribe";
import App2Styled from "./styledComponents/countStyled";
export default function App2() {
  return (
    <App2Styled backColor={'lightblue'}>
      <div className='alltitle'>使用redux-toolkit</div>
      <Count></Count>
      <CountSubscribe></CountSubscribe>
    </App2Styled>
  );
}