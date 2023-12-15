
//npm install chalk
const chalk = require('chalk'); 
  
// Printing the text in blue color
console.log(chalk.blue('Hello Geek!'));
  
// Printing the text in red color
console.log(chalk.red('This is an Error! '));
  
// Printing the text in green color
console.log(chalk.rgb(100, 150, 70)
        ('This is in custom color'));

        // Set background color to red
console.log(chalk.bgGreen('Hello Geek!'));
  
// Set background color to BlackBright
console.log(chalk.bgBlackBright('This is an Error! '));
  
// Set background color to WhiteBright
console.log(chalk.bgWhiteBright('This is in custom color'));

console.log("Text in ", chalk.bold('bold'));
console.log("Text in ", chalk.dim('dim '));
  
// Not widely supported
console.log("Text in ", chalk.italic('italic'));
console.log("Text in ", chalk.underline('underline '));