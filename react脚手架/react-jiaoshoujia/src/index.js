// 这个文件的功能是渲染挂载
import ReactDOM from "react-dom"
import React from "react"
import App from './App'

// 注意：这里使用的 React18 的写法
const root = createRoot(document.getElementById('root'));
root.render(<App />);

