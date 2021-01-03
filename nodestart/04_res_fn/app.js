const express = require('express');


let server = express();


let router = express.Router();


router.get('/json', (req, res) => {
        res.json([{ name: 'jack' }])
    })
    .get("/register", (req, res) => {
        res.end('register page')
    })
    .get('/download', (req, res) => {
        res.download('./app.js')
    })

server.use(router);


server.listen(8888);