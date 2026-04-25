const prompt = require("prompt-sync")();
let nums = [];
let i = 0;
do{
    nums[i] = Number(prompt("Enter the bill amounts and enter 0 to end : "));
}while(nums[i++] != 0);

for(let x of nums){
    if(x<250)
        console.log(`The tax for the amount ${x} is 25% and final bill is ${x+(x*(25/100))}`);
    else if(x>250 && x<500)
        console.log(`The tax for the amount ${x} is 15% and final bill is ${x+(x*(15/100))}`);
    else
        console.log(`The tax for the amount ${x} is 10% and final bill is ${x+(x*(10/100))}`);
}
