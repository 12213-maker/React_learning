// 这个文件的功能是渲染挂载

import ReactDOM from "react-dom"
import React from "react"
import App from './App'
import { BrowserRouter } from "react-router-dom"



ReactDOM.render(
<BrowserRouter><App/></BrowserRouter>
,document.getElementById('root'))