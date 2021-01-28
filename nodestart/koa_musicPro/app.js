const Koa = require('koa');


// 创建服务器
let app = new Koa();

// 开启服务器
app.listen(8888, () => {
    console.log("服务器启动在8888端口");
});

// 模版渲染
const render = require('koa-art-template');
render(app, {
    // 
})