let nums=[10,20,30,40,50];
//adds element at the end
let x=nums.push(60);
console.log(`${x} is the lenght of ${nums}`);
x=nums.push(70,80,90);
console.log(`${x} is the length of ${nums}`);

let nums2=[50,60,70,80,90];
//adds element at front
x=nums2.unshift(40);
console.log(`${x} is the length of ${nums2}`);
x=nums2.unshift(10,20,30);
console.log(`${x} is the length of ${nums2}`);