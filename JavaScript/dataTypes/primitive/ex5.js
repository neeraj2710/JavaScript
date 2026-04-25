// UNDEFINED
// for all uninitialized vars
//both value and datatype

//case 1:
let a;
document.write(a);
document.write("<br>");
document.write(typeof a);
document.write("<br>");

//case 2:
function show(age){
    document.write(`age is ${age}`);
}
show(25);
document.write("<br>")
show();

//case 3:
function calculate(a,b){
    let c = a + b;
    //return c;
}
document.write("<br>");
document.write(`sum is ${calculate(10,20)}`)
document.write("<br>");

//case 4;
let marks = [10,20,30];
document.write(marks[0]);
document.write("<br>");
document.write(marks[1]);
document.write("<br>");
document.write(marks[2]);
document.write("<br>");
document.write(marks[3]);
document.write("<br>");
document.write(marks[4]);
document.write("<br>");

//case 5;
let player = {
    name: "MS Dhoni", //property of player
    age: 43,
    birthPlace: "Ranchi"
};

document.write(player.name);
document.write("<br>")
document.write(player.age);
document.write("<br>");
document.write(player.birthPlace);
document.write("<br>");
document.write(player.runs);
document.write("<br>");