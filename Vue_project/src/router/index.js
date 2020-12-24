import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Member from '@/components/Member/Member'
import Search from '@/components/Search/Search'
import Shopcar from '@/components/Shopcar/Shopcar'
import NewsList from '@/components/News/NewsList'

Vue.use(Router)
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
export default new Router({
    routes: [{
            // 首先进行重定向的操作
            path: "/",
            redirect: '/Home'
        }, {
            path: '/Home',
            name: 'Home',
            component: Home
        }, {
            path: '/Member',
            name: 'Member',
            component: Member
        }, {
            path: '/Search',
            name: 'Search',
            component: Search
        }, {
            path: '/Shopcar',
            name: 'Shopcar',
            component: Shopcar
        },
        {
            name: 'news.list',
            path: '/news/list',
            component: NewsList
        }
    ]
})