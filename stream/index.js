const http = require("http");
const fs = require("fs");
 

const bioData = {
    name : "yash",
    surname : "Kevadiya",
    age : "20",
    place : "Bhavnager,Guj",
};

fs.writeFile('./read.json',JSON.stringify(bioData),(err) =>{
    console.log("JSON file is created");
})
const server = http.createServer((req, res) =>{
    
    // fs.readFile("./read.txt","utf-8",(err,data) =>{
    //     if(req.url == "/"){
    //         console.log(data);
    //         res.end(data);
    //     }
    // })

    // const stream = fs.createReadStream("./read.JSON");
    // stream.on("data",(chunkdata) =>{
    //     res.end(chunkdata);
    // });
    // stream.on("end",() =>{
    //     res.end();
    // });
    // stream.on("error",(err) =>{
    //     console.log(err)
    //     res.end("file is not found.");
    // });

    const aaa = fs.createReadStream("read.JSON");
    aaa.pipe(res);
    
}).listen(8080);