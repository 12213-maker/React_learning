// 这个文件的功能是渲染挂载

import ReactDOM from "react-dom"
import React from "react"
import App from './App'
import { Router, Route } from 'react-router'

import 'antd/dist/antd.less';


function About() {
  return <h3>About</h3>
}
function Inbox() {
  return <h3>Inbox</h3>
}

function Message() {
  return <h3>Message</h3>
}



ReactDOM.render(
  <Router>
    <Route path="/" component={App}>
      <Route path="about" component={About} />
      <Route path="inbox" component={Inbox}>
        <Route path="messages/:id" component={Message} />
      </Route>
    </Route>
  </Router>, document.getElementById('root'))

