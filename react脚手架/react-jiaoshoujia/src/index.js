// 这个文件的功能是渲染挂载

import ReactDOM from "react-dom"
import React from "react"
import App from './App'


//引入antd的css样式
// import 'antd/dist/antd.css';
//craco修改引入的样式
import 'antd/dist/antd.less';

//使用redux
import { Provider } from 'react-redux'
import store from './store/index'

ReactDOM.render(
  <Provider store={store}><App /></Provider>
  , document.getElementById('root'))