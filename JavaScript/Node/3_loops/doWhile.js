const prompt = require("prompt-sync")();
let currentYear = new Date().getFullYear();
let birthYear;
do{
    birthYear = Number(prompt("Enter your birth year: "));
}while(birthYear<=0 || birthYear > currentYear);
console.log(`Your age is ${currentYear-birthYear}`);
(currentYear-birthYear)>=18 ? console.log("you can vote") : console.log("You cannot vote")