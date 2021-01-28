const Koa = require('koa');
const fs = require('fs')
const bodyParser = require('koa-bodyparser');

let app = new Koa();

app.use(bodyParser())
    // app.use((context, next) => {
    //     console.log(context.request.url);
    //     console.log(context.request.method);
    //     console.log(context.request.headers);
    //     next();
    // })
    // async + await = promise(三合一)
app.use(async ctx => {
    ctx.body = ctx.request.body;
    "name": "jack"
});

function asyncReadFile() {
    return new Promise(function(resolve, reject) {
        fs.readFile('./1.html', (err, data) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(data)
        });
    })
}

app.use(async(ctx) => {
    console.log("第二件事");
    if (ctx.url === '/') {
        let data = await asyncReadFile();
        console.log(data);
        ctx.set("content-type", "text/html;charset=utf-8")
        ctx.body = data;
    } else {
        ctx.body = 'ok'
    }
})
app.listen(8888, () => {
    console.log("服务器启动在88888");
});