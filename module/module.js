const add = (a, b) =>{
    return a + b;
}

const sub = (a,b) =>{
    return a - b;
}
const name = "yash";

//method:-1
// module.exports.add = add;
// module.exports.sub = sub;
// module.exports.name = name;

//method:-2
module.exports = {add, sub, name};