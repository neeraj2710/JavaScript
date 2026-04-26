let nums = [10,20,30,10,50,60,10,70,80,90,10];
console.log(nums);
let uniqueNums = [];
for(let i=0;i<nums.length;i++){
    if(!uniqueNums.includes(nums[i]))
        uniqueNums.push(nums[i]);
}

console.log(uniqueNums);