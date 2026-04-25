const prompt = require("prompt-sync")();
let a = Number(prompt("Enter the number :"));
if(isNaN(a))
    console.log("Please input a Number");
else if(a%2 === 0)
    console.log(`${a} is a even number`);
else
    console.log(`${a} is a odd number`);