import About, { AboutCommend, AboutPlay } from "../components/About";
import Home from "../components/Home";
import Profile from "../components/Profile";
import User from "../components/User";

const routes = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/about',
    component: About,
    routes: [
      {
        path: '/about/commend',
        component: AboutCommend
      },
      {
        path: '/about/paly',
        component: AboutPlay
      }
    ]
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/user',
    component: User
  },

];

export default routes;