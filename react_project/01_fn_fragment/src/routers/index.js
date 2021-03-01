// 配置路由规则
import React from 'react'
import {Router,Route,NavLink,Switch,Redirect} from 'dva/router'
import Hometest from '../components/Hometest.js';

let fn  = function({history,app}){
    return (
        <Router history={history}>
            <React.Fragment>
                <Route path="/Hometest" exact component={Hometest}/>
            </React.Fragment>
        </Router>
    )
}


export default fn;