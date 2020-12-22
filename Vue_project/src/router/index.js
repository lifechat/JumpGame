import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Member from '@/components/Member/Member'
import Search from '@/components/Search/Search'
import Shopcar from '@/components/Shopcar/Shopcar'

Vue.use(Router)

export default new Router({
    routes: [{
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
    }]
})