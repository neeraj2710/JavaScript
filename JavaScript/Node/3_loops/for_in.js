let nums = [10,,30,40,50,60];

// loop skips the undefined values
for(x in nums){
    console.log(`Index = ${x}, value = ${nums[x]}`);
}