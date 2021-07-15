const Koa = require('koa');//加载koa
const KoaRouter = require('koa-router')


const app = new Koa();
const router = new KoaRouter();


//处理跨域
app.use(async(ctx,next)=>{
    ctx.set("Access-Control-Allow-Origin","*");

    await next();
});
router.get('/',async ctx =>{
        ctx.body = 'Axios原理分析与实现';
    }
)
app.use(router.routes());
app.listen(9999);