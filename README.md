# postParamsParser
一个解析http post请求中body内容的express中间件
# 依赖
express.js

# 使用说明
./server.js
```javascript
const express = require('express');

const postParamsParser = require('./postParamsParser');

let server = express();

server.listen(80);

//中间件链式调用

//1. 访问任何地址时都启用postParamsParser
server.use(postParamsParser);
或
//2. 访问特定地址时启用postParamsParser
server.use('/auth',postParamsParser);
server.use('/auth',(req,res) => {
//parse后的内容将会放在req.body中
res.send(req.body);
})

//输入输出示例：
//post参数: user:'Jack Li' pass:12345
//req.body = {"user":"Jack Li","pass":"12345"}
```
