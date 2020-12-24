<template>
<div class="tmpl">
   
   <nav-bar title="新闻列表" />
    <div class="demo">
       <ul>
          <li v-for="news in newsList" :key="news.id">
               <router-link :to="{name:'news.detail',query:{id:news.id}}">
                  <img :src="news.slider_image" alt="">
                  <div class="content">
                     <span>{{news.title}}</span>
                     <div class="news-desc">
                        <p>点击数：{{news.visit}}</p>
                        <p>发表时间:{{news.add_time| convertTime('YYYY-MM-DD')}}</p>
                     </div>
                  </div>
               </router-link>
          </li>
       </ul>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            newsList: []
        }
    },
    created() {
        this.$axios.get(' http://localhost:8080/static/news.json', {})
            .then(res => {
                this.newsList = res.data.data;
                console.log(res.data.data)
            })
            .catch(err => {
                console.log('轮播图异常', err);
            });
    },
    computed: {},
    methods: {},
}
</script>

<style  scoped>
.cms-s-header{
   justify-content: center;
   display: flex;
}
.demo a {
    display: block;
    width: 330px;
    height: 44px;
    color: #000;
    padding-left:15px;
}
.demo img {
    float: left;
    width: 42px;
    height: 42px;
    margin-right: 20px;
}
.demo a div {
    float: left;
    width: 285px;
    margin-right: 20px;
}
.demo span {
    display: block;
    width: 100%;
    font-size: 17px;
    line-height: 21px;
}
.demo a p {
    float: left;
    color: #0bb0f5;
    font-size: 14px;
    line-height: 21px;
}
.demo p:nth-child(2) {
    float: right;
}

.demo ul {
    padding: 0;
}
.demo ul a{
    box-sizing: border-box;
   display: flex;

}
.demo ul li{
   height: 100px;
}
.news-desc {
display: flex;
justify-content: space-between;    
}

</style>
