const express = require('express');


let server = express();


server.engine('.html', require('express-art-template'));


// 区分开发环境和生产环境

server.set('view options', {
    debug: process.env.NODE_ENV !== 'production',
    imports: {
        num: 1,
        reverse(str) {
            return '^_^' + str + '^_^';
        }
    }
})

server.set('view engine', 'html')

let router = express.Router();


router.get('/heor_list', (req, res) => {
    res.render('/list.html', {
        heros: [{ name: "貂蝉" }, { name: "吕布" }, { name: "董卓" }]
    });
})
server.use(router);


server.listen(8888);