const EventEmitter = require("events");
const event = new EventEmitter();

event.on("showmsg",(sc,msg) =>{
    console.log("My name is yash");
    console.log(`Page status code is ${sc} and msg is ${msg}`);
});
event.emit("showmsg",200,"ok");