// 这个文件的功能是渲染挂载

import ReactDOM from "react-dom"
import React from "react"
import App from './App'
import 'antd/dist/antd.less';
//挂载redux-toolkit
import { store } from "./store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";



ReactDOM.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root'))

