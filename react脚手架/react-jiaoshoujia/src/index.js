// 这个文件的功能是渲染挂载
import React, { createRoot } from "react-dom/client"
import App from './App'

// 注意：这里使用的 React18 的写法
const root = createRoot(document.getElementById('root'));
root.render(<App />);

