// const fs = require('fs');

// fs.writeFileSync("read.txt","Hello world :)");

// fs.writeFileSync("read.txt","Again Hello Word :)");

// fs.appendFileSync("read.txt","Hello World :) ");

// const buff_read = fs.readFileSync("read.txt");

// org_read = buff_read.toString();

// console.log(org_read);

// fs.renameSync("read.txt","readwrite.txt");


//Challenge 2 :

// const fs = require('fs');

// fs.mkdirSync("yash");

// fs.writeFileSync("yash/bio.txt","This is my bio-data");

// console.log(fs.readFileSync("yash/bio.txt").toString());

// console.log(fs.readFileSync("yash/bio-data.txt","utf8"));

// fs.appendFileSync("yash/bio.txt","Now i add more bio-data.");

// fs.renameSync("yash/bio.txt","yash/bio-data.txt");

// fs.unlinkSync("yash/bio-data.txt");

// fs.rmdirSync("yash");

// Create Asyncronus file.

// fs.mkdir("yash",(err) => {
//     console.log("Folder is created succesfully.");
//     console.log(err);
// });

// fs.writeFile("yash/read.txt","This file is Asyncronus File.",(err) =>{
//     console.log("file is creaed succesfully.");
//     console.log(err);
// });

// fs.appendFile("yash/read.txt","Add new text in asycronus file.",(err) => {
//     console.log("add new content succesfully.");
//     console.log(err);
// });

// fs.rename("yash/read.txt","yash/asyn.txt",(err) => {
//     console.log("File name changed succesfully");
//     console.log(err);
// });

// fs.readFile("yash/asyn.txt","UTF-8",(err,data) => {
//     console.log(data);
//     console.log(err);
// });

// fs.unlink("yash/asyn.txt",(err) => {
//     console.log("File is succesfully deleted.");
//     console.log(err);
// });

// fs.rmdir("yash",(err) => {
//     console.log("Yash folder is deleted succesfully.");
//     console.log(err);
// });

// fs.renameSync("index1.js","fs.js");

var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(8080);