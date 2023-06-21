import React, { Suspense, memo, useMemo, useState } from 'react'
import { useRoutes, Link} from 'react-router-dom'
import router from './router/router'

const Components = [
    {
        name: '认识jsx',
        component: React.lazy(() => import('./reactAdvanced/01_jsx')),
        show: true
    },
    {
        name: '起源 Component',
        component: React.lazy(() => import('./reactAdvanced/02_originComponent')),
        show: false
    }
]

const App = memo(() => {
    const [comps, setComps] = useState(Components)
    const ComponentNow = useMemo(() => {
        return comps.filter((item) => item.show)[0].component
    }, [comps])

    const init = () => {
        const newComps = comps.map((item) => {
            return { ...item, show: false }
        })
        setComps(newComps)
    }

    function changeShow(e) {
        init()
        const value = e.target.innerText
        setComps((comps) => {
            return comps.map((item) => {
                if (item.name === value) {
                    return { ...item, show: true }
                }
                return item
            })
        })
    }

    return (
        <div>
            <h3>
                {
                    comps.map((item) => {
                        return (
                            <div key={item.name} style={{cursor:'pointer'}} onClick={(e) => changeShow(e)}>{item.name}</div>
                        )
                    })
                }
            </h3>
            <Suspense fallback={<div>loading...</div>}>
                <ComponentNow></ComponentNow>
            </Suspense>


        </div>
    )
})

// const App = ()=>{
//     return (
//         <Suspense fallback={<div>loading...</div>}>
//             {useRoutes(router)}
//         </Suspense>
//     )
// }

export default App