import React, { useState } from "react";
import { useContext } from "react";

//函数式组件使用context ， 创建一个context实例，通过provider中的value发送数据
//在孙子组件中，通过useContext接收数据

//下面做一个一键改变全局颜色

const Mycontext = React.createContext('classValueDate');

function ContextLearn() {
  let theme = {
    light: {
      background: 'blue',
      fontcolor: 'red'
    },
    dark: {
      background: 'black',
      fontcolor: 'white'
    }
  }
  let [MycontextValue, setMycontextValue] = useState(theme.dark);
  function changeTheme() {
    if (MycontextValue.background === 'blue') {
      setMycontextValue(theme.dark);
    }
    else {
      setMycontextValue(theme.light);
    }
  }
  return (
    <Mycontext.Provider value={[MycontextValue, changeTheme]}>
      <Center></Center>
    </Mycontext.Provider>
  );
}

function Center() {
  return <Bottom></Bottom>
}

function Bottom() {
  const context = useContext(Mycontext);   
  let [theme, changeTheme] = context
  console.log(context)
  let style = {
    'background': theme.background,
    'color': theme.fontcolor
  }
  return (
    <div style={style}>
      BottomComponent
      <button onClick={changeTheme}>改变主题颜色</button>
    </div>
  )
}
export default ContextLearn;