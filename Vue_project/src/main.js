import Vue from 'vue'
import App from './App'
import router from './router'
// 配置axios
import Axios from 'axios'
// 配置MintUI
import MintUI from 'mint-ui'
// 引入css
import 'mint-ui/lib/style.css'
// 安装插件，注册全局组件及挂载属性
Vue.use(MintUI)
Vue.config.productionTip = false

// 配置公共URL
Axios.defaults.baseURL = "https://www.sinya.online/api/"
Vue.prototype.$axios = Axios
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})