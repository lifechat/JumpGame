<template>
<div>
    <!-- 轮播图 -->
    <mt-swipe :auto="4000">
        <mt-swipe-item v-for="(img,index) in imgs" :key="index">
            <img :src="img.img" />
        </mt-swipe-item>
    </mt-swipe>

    <!-- 九宫格 -->
    <div class="grid">
        <my-ul>
            <my-li v-for="(grid,index) in grids" :key="index">
                <router-link :to="grid.router">
                    <span :class="grid.className"></span>
                    <span>{{grid.title}}</span>
                </router-link>
            </my-li>
        </my-ul>
    </div>
</div>
</template>

<script>
import MyLi from '../common/MyLi.vue';
import MyUl from '../common/MyUl.vue';
export default {
    components: {
        MyUl,
        MyLi
    },
    data() {
        return {
            imgs: [],
            grids: [{
                    className: "cms-news",
                    title: '新闻资讯',
                    router:{
                        name:'news.list'
                    }
                },
                {
                    className: "cms-news",
                    title: '图文分享',
                    router:{
                        name:'photo.list',
                        params:{categoryId:0}
                    }
                },
                {
                    className: "cms-news",
                    title: '商品展示',
                    router:{
                        name:'news.list'
                    }
                },
                {
                    className: "cms-news",
                    title: '留言反馈',
                    router:{
                        name:'news.list'
                    }
                },
                {
                    className: "cms-news",
                    title: '搜索咨询',
                    router:{
                        name:'news.list'
                    }
                },
                {
                    className: "cms-photo",
                    title: '联系我们',
                    router:{
                        name:'news.list'
                    }
                },
            ]
        }
    },
    // created创建组件的生命周期函数中，可以操作数据
    created() {
        this.$axios.get(' http://localhost:8080/static/lunbo.json', {})
            .then(res => {
                // console.log(res);
                this.imgs = res.data.message;
                // console.log(res.data.message)
            })
            .catch(err => {
                console.log('轮播图异常', err);
            });
    }
}
</script>

<style scoped>
.mint-swipe {
    height: 200px;
}

/* 有可能坑*/
img {
    height: 100%;
    width: 100%;
}

/* .grid li {
    list-style: none;
    float: left;
    width: 33.3%;
    text-align: center;
    height: 100px;
    line-height: 100px;
    position: relative;
} */

/* .grid ul {
    margin: 0;
    padding: 0;
} */
a{
    text-decoration: none;
}
.cms-news {
   display: block;
    height: 50px;
    margin-bottom: -35px;
    margin-left: 35px;
    width: 50px;
    background-size: cover;
    background-image: url(http://m.360buyimg.com/mobilecms/s120x120_jfs/t1/125678/35/5947/4868/5efbf28cEbf04a25a/e2bcc411170524f0.png.webp);
}

.cms-photo {
     display: block;
    height: 50px;
    margin-bottom: -35px;
    margin-left: 35px;
    width: 50px;
    background-size: cover;
    background-image: url("http://m.360buyimg.com/mobilecms/s120x120_jfs/t1/125678/35/5947/4868/5efbf28cEbf04a25a/e2bcc411170524f0.png.webp");
}
</style>
