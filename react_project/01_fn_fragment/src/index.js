import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import router from './routers'
import modelIndex from './models'
import { createBrowserHistory, History } from 'history' 

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import './assets/css/index.css';
// 1 引入dva
import dva from 'dva'
// 2 创建dva实例app
let app = new dva({
    history:createBrowserHistory()
});
// 3 配置路由app.router(fn)
app.router(router)
// 4. app.use
// 注册app.model{()}
// app.model(modelIndex)
// 6 app.start("#root")
app.start('#root');


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
