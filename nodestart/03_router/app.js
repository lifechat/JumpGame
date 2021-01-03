const express = require('express');


let server = express();


let router = express.Router();


router.get('/login', (req, res) => {
        res.redirect('../pages/login.html');
    })
    .get("/register", (req, res) => {
        res.end('register page')
    })

server.use(router);


server.listen(8888);