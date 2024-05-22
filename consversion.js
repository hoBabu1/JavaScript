let num1 = 35
console.log(typeof(num1)); // type of is used to tell the type of object 

let num2 = "33"
// conversion to number 
let afterConversion = Number(num2)
console.log(afterConversion);
console.log(typeof(afterConversion));


let num3 = "33abc"
let afterConversion2 = Number(num3)
console.log(afterConversion2); // NaN
console.log(typeof(afterConversion2)); 

let score = null 
console.log(score) // null
console.log(typeof(score)); // object 
console.log(Number(score))


let score2 = undefined 
console.log(score2) // undefined 
console.log(typeof(score2)); // object 
console.log(Number(score2)) // NaN



console.log(Boolean(5)); // true 

/**
 * Notes 
 * Conversion to Number 
 * Number() used to convert to number | N is capital 
 * string to number = "33" --- 33 | "33abc" --- NaN
 * boolean to number = false --- 0 | true --- 1 
 * string to boolean = " " -- false | "namaste" -- true 
 */


