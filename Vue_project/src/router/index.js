import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/Home/Home'
import Member from '@/components/Member/Member'
import Search from '@/components/Search/Search'
import Shopcar from '@/components/Shopcar/Shopcar'
import NewsList from '@/components/News/NewsList'
import NewsDetail from '@/components/News/NewsDetail'
import PhotoList from '@/components/Photo/PhotoList'
import UglifyJsPlugin from 'uglifyjs-webpack-plugin'

// 路由
const Home = ()=> import('@/components/S_home')
// Vue.use(Router)
// const originalPush = Router.prototype.push
// Router.prototype.push = function push(location) {
//     return originalPush.call(this, location).catch(err => err)
// }
export default new Router({
    routes: [{
        path:'/',
        redirect:'/Home',
        component:()=>{import  ('@/')},
        children:[{

        }]
    }]
})