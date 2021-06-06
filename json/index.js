const fs = require("fs");
// const chalk = require("chalk");
const bioData = {
    name : "yash",
    surname : "Kevadiya",
    age : "20",
    place : "Bhavnager,Guj",
};

// console.log(bioData);

fs.writeFile("json1.json",JSON.stringify(bioData),(err) =>{
    console.log("bioData is successfully transfered.");
    console.log(err);
});

const obj = fs.readFile("json1.json","utf-8",(err,data) =>{
    console.log(data);
    console.log(JSON.parse(data));
    console.log(err);
});
