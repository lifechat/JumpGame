const express = require('express');


let app = express();

app.listen(8888, () => {
    console.log("服务器启动在88888");
});


app.use((req, res, next) => {
    console.log('白菜')
    next();
})
app.use((req, res, next) => {
    console.log('白菜2')
    next();
})
app.use((req, res, next) => {
    console.log('白菜3')
    next();
})
app.use((req, res, next) => {
    console.log('白菜4')
    next();
})