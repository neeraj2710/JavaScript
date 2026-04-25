const prompt = require("prompt-sync")();
let even=0,odd=0;
let num = Number(prompt());
for(let i =1;i<=num;i++){
    (i%2===0)?even+=i:odd+=i
}
console.log(even)
console.log(odd);