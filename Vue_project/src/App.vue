<template>
<div>
    <mt-header title="魔晶商城"></mt-header>
    <router-view></router-view>

    <mt-tabbar v-model="selected">
        <mt-tab-item id="Home">
            <img @click="changeHash" slot="icon" src="./assets/img/index.png">
            首页
        </mt-tab-item>
        <mt-tab-item id="Member">
            <img @click="changeHash" slot="icon" src="./assets/img/vip.png">
            会员
        </mt-tab-item>
        <mt-tab-item id="Shopcar">
            <img @click="changeHash" slot="icon" src="./assets/img/shopcart.png">
            购物车
        </mt-tab-item>
        <mt-tab-item id="Search">
            <img @click="changeHash" slot="icon" src="./assets/img/search.png">
            查找
        </mt-tab-item>
    </mt-tabbar>
</div>
</template>

<script>
export default {
    data() {
        return {
            selected: "",
        }
    },
    methods: {
        changeHash() {
            // 该调用早于了，子组件赋值给父组件的selected
            this.$nextTick(function(){
                 this.$router.push({
                   name:this.selected
                 })
            });
        }
    },
    watch: {
       
    }
}
</script>

<style>
</style>
