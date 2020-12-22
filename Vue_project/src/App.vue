<template>
  <div>
    <mt-header  title="魔晶商城"></mt-header>
        首次写项目{{msg}}

       <router-view/>

      <mt-tabbar v-model="selected">
              <mt-tab-item id="home">
                <img slot="icon" src="./assets/img/index.png">
                首页
              </mt-tab-item>
              <mt-tab-item id="member">
                <img slot="icon" src="./assets/img/vip.png">
                会员
              </mt-tab-item>
              <mt-tab-item id="shopcar">
                <img slot="icon" src="./assets/img/shopcart.png">
                购物车
              </mt-tab-item>
              <mt-tab-item id="search">
                <img slot="icon" src="./assets/img/search.png">
                查找
              </mt-tab-item>
        </mt-tabbar>
  </div>
</template>
<script>
export default {
    data() {
      return {
        selected:"",
        msg:"我是你爸爸"
      }
    },
    watch:{
      selected(newV,oldV){
        console.log(newV);
        this.$router.push({
          name:newV
        })
      }
    }
}
</script>
<style>
    body{margin: 0;}
</style>