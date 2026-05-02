let a= "aryan";
let b = "arush";
let c= "arushi";

let d = "Hello " + a + ", " + b + "and " + c + "! ";

let e= `Hello ${a}, ${b} and ${c}!`;
let f =`The length of a is ${a.length * 2}`;


function table(num) {
     let result = "";
     for(let i=1; i<=10; i++) {
          result += `${num} x ${i} = ${num *i}\n`;
     }
     return result;
}

//let sum1 = sun(5,10);
let sum = (x, y) => x+y;
console.log("Sum of 5 and 10:", sum(5,10));

let arr = [1, 2, 3, 4, 5, "Aaryan"];

// arr.filter(function(x) {
//     return typeof x === "number";
// }).map(function(y) {
//     return y * 2;
// }).forEach(function(abc) {
//     console.log("Element after * 2:", abc * 2);
// });

arr.filter(x => typeof x === "number").map(y => y *2).forEach(abc => console.log("Element after * 2:", abc * 2))