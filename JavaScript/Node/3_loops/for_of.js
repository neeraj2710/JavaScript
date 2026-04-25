let nums = [10,,30,40,,60];

//loops on undefined values and dosen't provide indexes
for(let i of nums){
    console.log(`value is ${i}`);
}