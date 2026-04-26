let nums2 = [40,50,60,70,40];

//1st method returns true or false
console.log(nums2.includes(20));
console.log(nums2.includes(40));

//2nd method returns 1st index of element or else -1
console.log(nums2.indexOf(20));
console.log(nums2.indexOf(40));

//2nd method returns last index of element or else -1
console.log(nums2.lastIndexOf(20));
console.log(nums2.lastIndexOf(40));

//3rd method performs sorting method consider elements Strings by default 
//hence gives wrong result in cas of Numbers by default
//this is because arrays are heterogeneous in nature
let sports = ["Cricket","Volleyball","basketball","Badminton"];
console.log(`Before sorting ${sports}`);
sports.sort();
console.log(`After sorting ${sports}`);
let arr = [7,2,9,1,5,25];
console.log(`Before sorting ${arr}`);
arr.sort();
console.log(`After sorting ${arr}`);
//solution
arr.sort((a,b)=>a-b);
console.log(`after proper sorting ${arr}`);

//4th method reverse the array
console.log(`Before reversing ${sports}`);
sports.reverse();
console.log(`After reversing ${sports}`);

//5th method converts array to comma-separated String and returns it
console.log(`Before join() method ${typeof sports}`);
let str = sports.join();
console.log(`after join() method ${typeof str}`);
