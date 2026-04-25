let a = 10;
let b = 10;
let c = "10";

document.write(`${a == b}<br>`);
document.write(`${a == c}<br>`);// checks only value not data type(loose =)

document.write(`${a === b}<br>`);
document.write(`${a === c}<br>`);// checks both value and data type(Strict =)

document.write(`${a != b}<br>`);
document.write(`${a != c}<br>`);

document.write(`${a !== b}<br>`);
document.write(`${a !== c}<br>`);

