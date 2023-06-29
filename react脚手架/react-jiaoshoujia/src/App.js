// import React, { Suspense, memo, useMemo, useState } from 'react'
// import { useRoutes, Link } from 'react-router-dom'
// import router from './router/router'

// const App = () => {
//     return (
//         <>
//             <div style={{backgroundColor:'lightblue'}}>
//                 {
//                     router.map((item) => {
//                         return <Link style={{margin:'15px'}} key={item.path} to={item.path}>{item.path.substring(1)}</Link>
//                     })
//                 }
//             </div>
//             <Suspense fallback={<div>loading...</div>}>
//                 {useRoutes(router)}
//             </Suspense>
//         </>
//     )
// }

// export default App


import React, { Component } from 'react'

export default class App extends Component {
    state={
        lists:[1,2,3]
    }
  render() {
    return (
        <div>
        <ul>
        {
            this.state.lists.map((item)=>{
                return <li key={item}>{item}</li>
            })
        }
        </ul>
        <button onClick={()=>this.setLists([2,3,4])}>修改lists</button>
        <button onClick={() => { console.log(this.render()) }}>打印render之后的内容</button>
    </div>
    )
  }
}

