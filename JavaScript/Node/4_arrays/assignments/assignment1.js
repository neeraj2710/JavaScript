const prompt = require("prompt-sync")();
let names = [];
for(let i=0;i<5;i++){
    names[i] = prompt(`Enter ${i} name : `);
}
let key = prompt("Enter the name to be searched : ");
let index = -1;
let isFound = true;
do{
    index = names.indexOf(key,index+1);
    if(index == -1){
        isFound = false;
        break;
    }
    console.log(`Name found at index ${index}`);
}while(index!=-1);
if(!isFound){
    console.log(`name not found`);
}