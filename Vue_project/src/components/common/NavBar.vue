<template>
<div class="cms-s-header">
    <h1 @click="goback">&nbsp;<</h1>
    <h1 class="page-title">{{title}}</h1>
</div>
</template>

<script>
export default {
    // 组件名：
    name:'nav-bar',
    props:['title'],
    data() {
        return {}
    },
    created() {},
    computed: {},
    methods: {
        // 返回功能
        goback(){
            this.$router.go(-1);
        }
    },
}
</script>

<style scoped>
.cms-s-header {
    height: 40px;
    background: #f7f7f7;
}

.page-title {
    margin-left: 25%;
}

h1,
h2 {
    text-align: center;
    height: 40px;
    line-height: 40px;
    margin-top: 0px;
    margin-bottom: 0px;
    margin-left: -120px;
}
</style>
