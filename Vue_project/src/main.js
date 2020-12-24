import Vue from 'vue'
import App from './App'
import router from './router'
// 配置axios
import Axios from 'axios'
// 配置MintUI
import MintUI from 'mint-ui'
// 引入css
import 'mint-ui/lib/style.css'
import './assets/css/global.css'

import MyUl from '@/components/Common/MyUl'
import MyLi from '@/components/Common/MyLi'
import NavBar from '@/components/Common/NavBar'

// moment 全局日期过滤器
import Moment from 'moment'

Vue.filter('convertTime', (data, formatstr) => {
    return Moment(data).format(formatstr)
});
// 注册全局组件
Vue.component(MyUl.name, MyUl)
Vue.component(MyLi.name, MyLi)
Vue.component(NavBar.name, NavBar)
    // 安装插件，注册全局组件及挂载属性


Vue.use(MintUI)
Vue.config.productionTip = false


// 配置公共URL
// Axios.defaults.baseURL = "https://pintuan.kcode.top/api/"
Vue.prototype.$axios = Axios
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})