import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import Router from 'vue-router'
// 配置axios
import Axios from 'axios'
// 配置vuex
import echarts from 'echarts'

import store from './store/index'

// import MintUI from 'mint-ui'
// import 'babel-polyfill'
// 引入css
import './assets/css/global.css'
import 'element-ui/lib/theme-chalk/index.css'

import ElementUI from 'element-ui'



// moment 全局日期过滤器
import Moment from 'moment'


// Vue.filter('convertTime', (data, formatstr) => {
//     return Moment(data).format(formatstr)
// });
// // 注册全局组件
// Vue.component(MyUl.name, MyUl)
// Vue.component(MyLi.name, MyLi)
// Vue.component(NavBar.name, NavBar)
//     // 安装插件，注册全局组件及挂载属性

Vue.use(Router)
Vue.use(Vuex)
Vue.use(ElementUI)
Vue.use(echarts)

Vue.config.productionTip = false


// 配置公共URL
// Axios.defaults.baseURL = "https://pintuan.kcode.top/api/"
Vue.prototype.$axios = Axios
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})