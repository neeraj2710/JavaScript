let prompt = require("prompt-sync")();
let a = prompt("Enter 1st Number: ");
let b = prompt("Enter 2nd Number: ");
let c = prompt("Enter 3rd Number: ");
let sum = Number(a)+Number(b)+Number(c);
console.log(`Sum of the numbers is ${sum}`);
console.log(`There sum is ${sum/3}`);