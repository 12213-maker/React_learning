import React from 'react'
import { NavLink, Route ,Switch} from 'react-router-dom'


export default function About() {
  return (
    <div>
      <NavLink to='/about/commend'>推荐</NavLink>
      <NavLink to='/about/paly'>paly</NavLink>
      <br />
      <div>About</div>
      <br />
      <Switch>
        <Route exact path='/about/commend' component={AboutCommend}></Route>
        <Route path='/about/paly' component={AboutPlay}></Route>
      </Switch>
    </div>
  )
}

function AboutCommend() {
  return <span>commend</span>
}

function AboutPlay() {
  return <span>AboutPlay</span>
}