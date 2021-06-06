const http = require("http");
const fs = require("fs");
http.createServer((req,res) =>{
    const data = fs.readFileSync(`${__dirname}/api.json`,"utf-8")
    const objdata = console.log(JSON.parse(data));
    if(req.url == "/"){
        res.writeHead(200,{"content-type" : "application/json"});
        res.end(objdata);     
    }
}).listen(8000);