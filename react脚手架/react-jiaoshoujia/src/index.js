// 这个文件的功能是渲染挂载
import React, { createRoot } from "react-dom/client"
import App from './App'
import 'antd/dist/antd.less';
import { BrowserRouter } from "react-router-dom";

// 注意：这里使用的 React18 的写法
const root = createRoot(document.getElementById('root'));
root.render(<BrowserRouter><App /></BrowserRouter>);

