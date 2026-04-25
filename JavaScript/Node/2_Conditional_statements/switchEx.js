const prompt = require("prompt-sync")();
let a  =  prompt("Enter a number:");
if(isNaN(a))
    console.log("Please input a number");
else{
    switch(Number(a)){
        case 11: case 12: case 1: case 2:
            console.log(`${a} month is of winter season`);
            break;
        case 3: case 4: case 5: case 6:
            console.log(`${a} month is of summer season`);
            break;
        case 7: case 8: case 9: case 10:
            console.log(`${a} month is of Rainy season`);
            break;
        default:
            console.log("Wrong month number");            
    }
}

