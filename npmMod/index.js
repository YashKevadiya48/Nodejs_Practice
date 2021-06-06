const chalk = require("chalk");

console.log(chalk.bgGreenBright.black.underline("True"));
console.log(chalk.redBright.bold.underline.inverse("False"));
console.log(chalk.blackBright.inverse("wow!"));
console.log(chalk.blue('Hello') + ' World' + chalk.red('!'));
console.log(chalk.keyword('orange')('Yay for orange colored text!'));


const validator = require("validator");

const email = validator.isEmail("yashkevadiya46@gmail.com");
console.log(email ? chalk.greenBright.inverse(email) : chalk.redBright.inverse(email));