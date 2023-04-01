import { useState } from "react";
import style1 from './css-modules/style1.module.css'
import style2 from './css-modules/style2.module.css'
import Compoonent3 from './styled-components/Component3'
import Component5 from './classNames/Component5'

// 1. 使用内联样式 style
export default function App() {
    let [backgroundColor, setBackgroundColor] = useState('black');
    let style = {
        backgroundColor: backgroundColor,
        color: 'red',
        fontSize: '20px',
    }
    function changeColor() {
        backgroundColor === 'black' ?
            setBackgroundColor('blue') :
            setBackgroundColor('black')
    }
    return (
        <>
            <div>--------------使用内联样式 style----------------</div>
            <span style={style}>showme</span>
            <button onClick={changeColor}>点击改变背景颜色</button>

            <Component1></Component1>
            <Component2></Component2>
            <Compoonent3></Compoonent3>
            <Component5></Component5>
        </>
    );
}


// 2. 使用module-css
function Component1() {
    return (
        <>
            <div>--------------使用module-css----------------</div>
            <span className={style1.title}>span1</span>
        </>
    );
}
function Component2() {
    return (
        <>
            <span className={style2.title}>span2</span>
        </>
    );
}




// 1. 使用内联样式 style
// 2. 使用module-css
// 3. 使用css in js ， 有很多第三方库适用于css in js，比如styled-component
//    而且使用styled-component还可以轻易的实现js和css的交互，通过props传递变量