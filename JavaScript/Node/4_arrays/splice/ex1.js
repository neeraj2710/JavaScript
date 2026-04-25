let nums=[10,20,30,40,50];
//starts deleting from 1st args
let rem = nums.splice(2);
console.log(`nums array ${nums}`);
console.log(`rem array ${rem}`);

let nums2=[10,20,30,40,50];
//deletes elements = 2nd args
let rem2 = nums2.splice(2,1);
console.log(`nums2 array ${nums2}`);
console.log(`rem2 array ${rem2}`);

let nums3=[10,20,30,40,50];
//replaces elements = 2nd args from index = 1st args
let rem3 = nums3.splice(2,1,25,35);
console.log(`nums4 array ${nums3}`);
console.log(`rem4 array ${rem3}`);

let nums4=[10,20,30,40,50];
//replaces elements = 2nd args from index = 1st args
let rem4 = nums4.splice(0,4,25,35);
console.log(`nums4 array ${nums4}`);
console.log(`rem4 array ${rem4}`);

let nums5=[10,20,30,40,50];
//inserts elements from index = 1st args
let rem5 = nums5.splice(1,0,25,35);
console.log(`nums5 array ${nums5}`);
console.log(`rem5 array ${rem5}`);

let nums6=[10,20,30,40,50];
//removes element from end
// -ve indexing is allowed but only with methods
let rem6 = nums6.splice(-1);
console.log(`nums6 array ${nums6}`);
console.log(`rem6 array ${rem6}`);

