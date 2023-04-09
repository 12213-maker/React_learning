import { About, AboutMore, Home, AboutDetail, Aboutthree, Aboutdetail_1, AboutdetailOne, AboutMoreOne, AboutthreeOne, Hooksshow } from "../App";
import { Navigate } from 'react-router-dom'

const routes = [
  {
    path: '/',
    //不是用这样来重定向的，使用navigate
    // redirect: '/home'
    element: <Navigate to="/home"></Navigate>
  },
  {
    path: '/home',
    element: <Home></Home>
  },
  {
    path: '/about',
    element: <About></About>,
    //子路由不需要/
    children: [
      {
        path: 'aboutmore',
        element: <AboutMore></AboutMore>,
        children: [
          {
            //使用search传参
            path: 'aboutmoreone',
            element: <AboutMoreOne></AboutMoreOne>
          }
        ]
      },
      {
        path: 'aboutdetail',
        element: <AboutDetail></AboutDetail>,
        children: [
          {
            //使用params传参
            path: 'aboutdetailone/:id',
            element: <AboutdetailOne></AboutdetailOne>
          }
        ]
      },
      {
        //使用state传值
        path: 'aboutthree',
        element: <Aboutthree></Aboutthree>,
        children: [
          {
            path: 'aboutthreeone',
            element: <AboutthreeOne></AboutthreeOne>
          }
        ]
      },
    ]
  },
  {
    path: '/hooksshow',
    element: <Hooksshow></Hooksshow>
  },
]

export default routes;