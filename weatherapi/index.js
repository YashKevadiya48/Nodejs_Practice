const  http = require("http");
const fs = require("fs");
var requests = require("requests");
const events = require("events");


const homeFile = fs.readFileSync("index.html","utf-8");

const replaceVal = (tempVal, orgVal) =>{
    let temprature = tempVal.replace("{%country%}",orgVal.sys.country);
    temprature = temprature.replace("{%city%}",orgVal.name);
    temprature = temprature.replace("{%skyview%}",orgVal.weather[0].main);
    temprature = temprature.replace("{%tempval%}",(orgVal.main.temp -273.15).toFixed(2));
    temprature = temprature.replace("{%tempmax%}",(orgVal.main.temp_max - 273.15).toFixed(2));
    temprature = temprature.replace("{%tempmin%}",(orgVal.main.temp_min -273.15).toFixed(2));
    return temprature;
}
const server = http.createServer((req,res) =>{
    if(req.url == "/"){
        requests("http://api.openweathermap.org/data/2.5/weather?q=Bhavnagar&appid=0faa90b27c5961aa4abd37539419fe9b")
        .on("data",(chunk) =>{
            const objdata = JSON.parse(chunk);
            const arrdata = [objdata];
            // console.log(arrdata);
            // console.log("temprature of city :",arrdata[0].name);
            // console.log("temprature is : ",arrdata[0].main.temp);
            // console.log("max temprature is : ",arrdata[0].main.temp_max);
            // console.log("min temprature is :", arrdata[0].main.temp_min);

            const realTimeData = arrdata.map((val) => replaceVal(homeFile,val)).join("");
            res.write(realTimeData);
            // console.log(realTimeData);
        })
        .on("end",(err) =>{
            if(err){
                return console.log("connection is closed due to errors",err);
            }
            res.end();
        })
    }else{
        res.end("Please type proper URL.");
    }
}).listen(8080);    