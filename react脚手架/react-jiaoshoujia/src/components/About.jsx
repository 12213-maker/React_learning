import React from 'react'
import { renderRoutes } from 'react-router-config'
import { NavLink, Route ,Switch} from 'react-router-dom'


export default function About(props) {
  //通过props中的route得到当前route中的子组件（子routes）
  const routes= props.route.routes;
  return (
    <div>
      <NavLink style={{margin:'20px'}} to='/about/commend'>推荐</NavLink>
      <NavLink to='/about/paly'>paly</NavLink>
      <br />
      <br />
      {/* <Switch>
        <Route exact path='/about/commend' component={AboutCommend}></Route>
        <Route path='/about/paly' component={AboutPlay}></Route>
      </Switch> */}
      {renderRoutes(routes)}
    </div>
  )
}

export function AboutCommend() {
  return <span>commend</span>
}

export function AboutPlay() {
  return <span>AboutPlay</span>
}