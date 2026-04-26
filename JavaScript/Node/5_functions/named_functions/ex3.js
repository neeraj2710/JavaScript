function calculate(){
    let sum = 0;
    for(let x of arguments)
        sum += x;
    let avg = sum/arguments.length;
    console.log(`There sum is ${sum}`);
    console.log(`There avg is ${avg}`);
}

// now any no. of args can be passed 
calculate(1,2,3);
calculate(1,2,3,4,5);
