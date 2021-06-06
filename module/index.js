//method 1:-
// const modules = require("./module");

// console.log(modules);
// console.log(modules.add(5,5));
// console.log(modules.sub(10,5));
// console.log(modules.name);

//method 2:-
const {add, sub, name} = require("./module");

console.log(add(5,5));
console.log(sub(10,5));
console.log(name);