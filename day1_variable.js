/*
how to print console in tabular form
*/

let num1=1234;
var name2="bjsdds";
const password="1234";

console.table([num1, name2, password]);


// Try to avoid use of var because of functional scope and block scope



// We can know any variables type buy using below->

console.log(typeof name2);
console.log(typeof 1234);




let number = "345"; // string
let isActualNumber = Number(number);  // conver string into a number 
console.log(isActualNumber);

let someNumber = 33;
let isString = String(someNumber);
console.log(isString);
console.log(typeof isString);