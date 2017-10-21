const express = require('express');
const postParamsParser = require('./postParamsParser');
let server = express();

server.listen(8080);
server.use(postParamsParser);
server.use('/',function(req,res){
    // GET => req.query
    // POST => req.body
    // get方式的参数为空即发送req.body,否则发送req.query
    JSON.stringify(req.query) !== '{}'?res.send(req.query):res.send(req.body)
})