// 配置路由规则
import React from 'react'
import {Router,Route,NavLink,Switch,Redirect} from 'dva/router'
import Hometest from '../components/Hometest.js';
import Signin from '../components/Signin';
import Home from '../components/Home'

let fn  = function({history,app}){
    return (
        <div>hello</div>
    )
}


export default fn;