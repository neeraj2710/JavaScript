const prompt = require("prompt-sync")();
let x = Number(prompt());
let i = 1;
while(i<=10){
    console.log(`${x}*${i}=${x*i}`);
    i++;
}
    
    