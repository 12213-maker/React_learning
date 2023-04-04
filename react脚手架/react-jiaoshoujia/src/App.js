import Count from "./components/Count";
import App2 from "./src_redux_toolkit/App2";

//redux-toolkit的使用
import { store } from "./src_redux_toolkit/store/index";
import { Provider } from "react-redux";

export default function App() {
    return (
        <>
            <Count></Count>

            {/*下面这个App2就相当于挂载到根节点的原App*/}
            <Provider store={store}><App2 /></Provider>
        </>
    );
}