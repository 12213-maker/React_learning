import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import { Link, Routes, Route, useNavigationType, Navigate, useInRouterContext, useRoutes, Outlet, useParams, useSearchParams, useLocation, useNavigate, useMatch, useOutlet } from 'react-router-dom'
import routes from './routes'
import './style/index.css'

//主页面
export default function App() {
    return (
        <div>
            <div style={{ backgroundColor: 'lightblue' }}>
                <Link className={classNames('linkcss')} to='/home'>home--演示编程式路由</Link>
                <Link className={classNames('linkcss')} to='/about'>about--路由的嵌套和传参</Link>
                <Link className={classNames('linkcss')} to='/hooksshow'>hooksshow--展示更多hooks</Link>

            </div>

            {/* 也可以直接在Route中写子路由 */}
            {/* <Routes>
                <Route path='/home' element={<Home></Home>}></Route>
                Navigate 组件，页面一渲染就显示对应组件，可实现重定向效果
                <Route path='/about' element={<About></About>}>
                    <Route path='aboutmore' element={<AboutMore></AboutMore>}></Route>
                    <Route path='/about/aboutdetail' element={<AboutDetail></AboutDetail>}></Route>
                    <Route path='aboutthree' element={<Aboutthree></Aboutthree>}></Route>
                </Route>
            </Routes> */}

            {/* 使用路由表注册路由 */}
            {useRoutes(routes)}
        </div>
    )
}


//一级路由
//演示编程式导航
export function Home() {

    const navigate = useNavigate();
    function changePath(url) {
        const config = {
            replace: true,
            state: {
                id: '编程式id',
                name: '编程式跳转',
            }
        }
        // 接收两个参数：目标路径, 配置对象
        navigate(url, config);
        //还有一种类似history.go的用法
        //后退
        // navigate(-1);
    }
    return (
        <div>
            <button onClick={() => changePath('/about/aboutthree')}>跳转到aboutthree</button>
            <Outlet></Outlet>
        </div>
    );
}
//演示嵌套路由+路由传值
export function About() {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/about/aboutmore');
    }, [])

    return <div>
        About
        <div style={{ backgroundColor: 'lightblue' }}>

            {/* Link中to有三种写法 */}
            <Link className={classNames('linkcss')} to='aboutmore'>aboutmore</Link>
            <Link className={classNames('linkcss')} to='./aboutdetail'>aboutdetail</Link>
            <Link className={classNames('linkcss')} to='/about/aboutthree'>aboutthree</Link>
        </div>
        {/* Outlet 路由占位符，表示"路由映射表"中匹配的组件将在此处展示 */}
        <Outlet></Outlet>
    </div>
}

export function Hooksshow() {
    // 返回当前匹配信息
    const match = useMatch('/home');
    console.log(match);
    //如果组件在 <Router> 的上下文中呈现，则 useInRouterContext 钩子返回 true，否则返回 false。
    // 调用 useNavigationType() hooks，可以获取当前路由是以那种跳转模式跳转过来的（PUSH、REPLACE）
    console.log(useNavigationType());
    // 如果嵌套路由没有挂载,则result为null
    // 如果嵌套路由已经挂载,则展示嵌套的路由对象
    const result = useOutlet();
    console.log(result)
    return (
        <>
            <div>当前匹配到的路由的信息(见log)</div>
            <div>是否处于路由的上下文环境:{useInRouterContext() ? 'true' : 'false'}</div>
            <div>当前路由是以那种跳转模式跳转过来的:{useNavigationType()}</div>
        </>
    );
}


//二级路由 (用二级路由来演示如何进行路由传参)


// 1. 演示动态路由传递Params参数
export function AboutDetail() {
    return (
        <div>
            <Link to={`aboutdetailone/${'lnl'}`}>传递Params参数</Link>
            <Outlet></Outlet>
        </div>
    )
}

// 2. 使用search传参 (不需要使用动态路由,直接用问号拼接在Link中的to的后面)
export function AboutMore() {
    return (
        <div>
            <Link to={`aboutmoreone?id=${1}&name=${'lnl'}`}>使用search传参</Link>
            <Outlet></Outlet>
        </div>
    )
}

// 3. 向路由组件传递state参数
export function Aboutthree() {
    const [stateValue, setStateValue] = useState({
        id: '3',
        name: 'lnl'
    });
    return (
        <div>

            <button onClick={() => setStateValue({ ...stateValue, name: 'mushroom' })}>点击修改路由参数</button>
            <br></br>
            {/* 1. 传递 state 参数，添加 state 属性，值为一个对象 */}
            <Link to='aboutthreeone' state={stateValue}>向路由组件传递state参数</Link>
            <br></br>
            <Outlet></Outlet>
        </div >
    );


}


//三级路由
export function AboutdetailOne() {
    const routerParams = useParams();
    return <div>
        我是AboutdetailOne,我接收到了params: {routerParams.id}
    </div>
}

export function AboutMoreOne() {
    const [search, setSearch] = useSearchParams();
    const id = search.get('id');
    const name = search.get('name');
    return <div>
        我是AboutMoreOne,id:{id},name:{name}
    </div>
}

export function AboutthreeOne() {
    //通过useLocation接收参数
    const { state: { id, name } } = useLocation();
    return (
        <>
            <div>id:{id}</div>
            <div>name:{name}</div>
        </>
    );
}
