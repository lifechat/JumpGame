<template>
<div>

    <el-button @click="show">点我</el-button>
    <el-from inline >
        <el-form-item label="审批人">
            <el-input  placeholder="审批人"></el-input>
        </el-form-item>
        <el-form-item label="活动区域">
            <el-select>
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item> 
    </el-from>



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
            user:'sam',
            region:'区域二'
        }
    },
    methods: {
        show(){
           this.$message.success("Toast from element-ui")
        },
        changeHash() {
            // 该调用早于了，子组件赋值给父组件的selected
            this.$nextTick(function(){
                 this.$router.push({
                   name:this.selected
                 })
            });
        },
        // onSubmit(){
        //     console.log(this.data)
        // }
    },
    watch: {
       
    }
}
</script>

<style>
</style>
