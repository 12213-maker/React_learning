import React from "react";
import { Navigate } from "react-router-dom";
import JsxCom from "../reactAdvanced/01_jsx";
import OriginComponent from "../reactAdvanced/02_originComponent";
import State from "../reactAdvanced/03_state";

const router = [
  {
    path: '/',
    element: <Navigate to='/01_jsx'></Navigate>
  },
  {
    path: '/01_jsx',
    element: <JsxCom></JsxCom>
  },
  {
    path: '/02_originComponent',
    element: <OriginComponent></OriginComponent>
  },
  {
    path: '/03_state',
    element: <State></State>
  }
]

export default router