import React from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter, Switch, Router, Route, NavLink, useHistory, withRouter, useRouteMatch } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import NoMatch from './components/NoMatch'
import Profile from './components/Profile'
import User from './components/User'

function App() {

    const url = 'lnl';
    // 没有在Router组件内使用useHistory是不会生效的，使用withRoute来重新暴露App
    const history = useHistory();
    function changepage() {
        history.push('/user');
    }
    return (
        <div>
            <button onClick={changepage}>跳转到user页面</button>


            <NavLink exact to='/' activeStyle={{ color: 'lightblue' }}>首页</NavLink>
            <NavLink exact to='/about' activeStyle={{ color: 'lightblue' }}>关于</NavLink>
            <NavLink exact to='/profile' activeStyle={{ color: 'lightblue' }}>我的</NavLink>
            <NavLink exact to='/user' activeStyle={{ color: 'lightblue' }}>user</NavLink>
            <NavLink exact to={`/detail/${url}`} activeStyle={{ color: 'lightblue' }}>动态路由（可以传参）</NavLink>

            {/* 渲染页面 */}
            <Switch>
                <Route exact path='/' component={Home}></Route>
                <Route path='/about' component={About}></Route>
                <Route path='/profile' component={Profile}></Route>
                <Route path='/user' component={User}></Route>
                <Route path='/nomatch' component={NoMatch}></Route>
                {/* 匹配动态路由 */}
                <Route path='/detail/:user' component={AutoMatch}></Route>
            </Switch>
        </div>
    )
}

export default withRouter(App);

function AutoMatch(){
    const match = useRouteMatch();
    const url = match.url;
    console.log(url);
    return (
        <>
        参数：{url}
        </>
    );
}