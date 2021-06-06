const http = require("http");

http.createServer((req, res) =>{
    if(req.url == "/"){
        res.write("<h1 style='color:green;'>Response from the Home sides.</h1>");
        res.end();
    }
    else if(req.url == "/contactus"){
        res.write("<h1 style='color:green;'>Response from the Contact Us side.</h1>");
        res.end();
    }
    else if(req.url == "/aboutus"){
        res.write("<h1 style='color:green;'>Response from the About Us side.</h1>");
        res.end();
    }
    else{
        res.writeHead(404,{"content-type" : "text/html"});
        res.write("<h1 style='color:red;background-color:black;text-align:center;height:10%;'>404 Page error. Page is not Found</h1>");
        res.end();
    }
    
}).listen(8080);