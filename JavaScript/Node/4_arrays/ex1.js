let nums = [1,2,3,4];
let colors = ["red","blue","green"];
console.log(nums);
console.log(colors);

let fruits = [];
fruits[0] = "Mango";
fruits[1] = "apple";
fruits[3] = "banana";
console.log(fruits);

console.log(`size of fruits = ${fruits.length}`);

fruits.length = 7
console.log(`New size of fruits is ${fruits.length}`);
console.log(fruits);

for(let i=0;i<fruits.length;i++)
    console.log(`${fruits[i]}`);