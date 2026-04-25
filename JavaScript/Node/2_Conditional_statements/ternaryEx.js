const prompt = require("prompt-sync")();
let a = prompt("Enter a number: ");
if(isNaN(a))
    console.log("Please input a number");
else{
    let x = Number(a);
    let y = x>0?x:-x;
    console.log(`absolute value of ${x} is ${y}`);
}