const prompt = require("prompt-sync")();
let nums = [];
for(let i=0;i<5;i++){
    nums.push(prompt(`Enter the ${i} number: `));
}
let key = prompt("Enter the number to be removed : ")

while(nums.indexOf(key) != -1){
    nums.splice(nums.indexOf(key),1);
}

console.log(`final array is ${nums}`);